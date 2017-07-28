var express = require('express');
var passport = require('passport');
var session = require('express-session');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./config/config');
var app = express();
app.use(session({ secret: config.secret }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL
}, function (token, refreshToken, profile, done) {
    return done(null, profile);
}))

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/me',
    failureRedirect: 'auth/facebook'
}), function (req, res) {
    console.log(req.session);
});

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

app.get('/me', function (req, res) {
    res.send(req.user);
})

app.listen(3000, function () {
    console.log("We have ears")
})