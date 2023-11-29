const jwt = require('jsonwebtoken');


const isAuthenticated = (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.redirect('/login');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.redirect('/login');
        } else {
            res.locals.loggedIn = true;
            next();
        }
    });
};


module.exports = isAuthenticated;