const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require("connect-flash");
const jwt = require('jsonwebtoken');
const database = require('./db');
const authRoutes = require('./routes/auth');
const workoutRoutes = require('./routes/workout');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const app = express();



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(__dirname + '/static'));
app.use(session({
    secret: 'AB787SS5DSASADOISDSA9SD',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(flash());


app.use((req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err) => {
            if (err) {
                res.locals.loggedIn = false;
            } else {
                res.locals.loggedIn = true;
            }
        });
    }else{
        res.locals.loggedIn = req.session.loggedIn || false;
    }
    next();
});


app.use('', authRoutes);
app.use('', workoutRoutes);


database().catch(err => {
    console.error(err);
});

app.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`);
});