const User = require('../models/user')
const passport = require('passport')

module.exports = {
    getHomePage: function(req, res, next) {
        if (req.user) {
            res.render('index', {
                title: 'Auth System',
                user: req.user
            })
        } else {
            res.render('index', {title: 'Auth System'});
        }
    },
    registerForm: function(req, res, next) {
        if (req.user) {
            res.render('index', {
                title: 'Auth System',
                user: req.user
            })
        } else {
            res.render('register', {title: 'Auth System'});
        }
    },
    registerProcess: function(req, res, next) {
        if (req.user) {
            res.render('index', {
                title: 'Auth System',
                user: req.user
            })
        } else {
            if (req.body.password == req.body.confirmpassword) {
                User.register({
                    fullname: req.body.fullname,
                    username: req.body.username,
                    email: req.body.email
                }, req.body.password, function(err, result) {
                    if (err) {
                        console.log(err);
<<<<<<< d3d4dedc4a7630c5808adf11c0c0b5935351e4b8
=======
                        console.log(result);
>>>>>>> something wrong
                        res.render('register', {alert: 'Registration Failed. Please Try again'})
                    } else {
                        passport.authenticate('local')(req, res, function() {
                            req.session.save(function(err, next) {
                                if (err)
                                    return next(err)
<<<<<<< d3d4dedc4a7630c5808adf11c0c0b5935351e4b8
                                res.render('index', {
                                    title: 'Auth System',
                                    user: req.user
                                })
=======
                                res.render('/', {title: 'Session Confirmed'})
>>>>>>> something wrong
                            })
                        })
                    }
                })
            } else {
                res.render('register', {alert: 'Confirm Password not matched'})
            }
        }
    },
    loginForm: function(req, res, next) {
        if (req.user) {
            res.render('index', {
                title: 'Auth System',
                user: req.user
            })
        } else {
            res.render('login', {title: 'Auth System'});
        }
    },
    loginProcess: function(req, res, next) {
        req.session.save((err) => {
            if (err) {
                console.log(err);
                res.redirect('/login', {alert: 'username or password wrong'})
            } else {
                console.log(req);
                res.redirect('/')
            }
        })
    },
    logout: function(req, res, next) {
        req.logout()
        res.redirect('/')
    }
}
