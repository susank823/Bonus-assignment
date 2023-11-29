const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const passport = require('../passport');
const User = require('../models/user');


const registerView = (req, res) => {
    res.render("register", { flash: req.flash() });
};
const register = async (req, res) => {
    try {
        let { username, password } = req.body;

        const check_user = await User.findOne({ username: username });
        if (check_user) {
            req.flash("auth_msg", "User already exists!");
            res.redirect(`/register`);
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await User.create({ username, password: hash });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.cookie('jwt', token, { httpOnly: true });
        res.redirect(`/`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};


const loginView = (req, res) => {
    res.render("login", { flash: req.flash() });
};
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });

        if (!user) {
            req.flash('auth_msg', 'User does not exist!');
            return res.redirect('/login');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            req.flash('auth_msg', 'Password is incorrect!');
            return res.redirect('/login');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        res.cookie('jwt', token, { httpOnly: true });

        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};


const logout = (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
};


module.exports = {
    registerView,
    register,
    loginView,
    login,
    logout
};