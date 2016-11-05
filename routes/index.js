var express = require('express');
var router = express.Router();
var User = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Auth System'});
});

router.get('/register', function(req, res, next) {
    res.render('register', {title: 'Auth System'});
});

router.post('/register', function(req, res, next) {
    if (req.body.password == req.body.confirmpassword) {
        User.register({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email
        }, req.body.password, function(err, result) {
            if (err) {
                console.log(err);
                res.render('register', {alert: 'Registration Failed. Please Try again'})
            } else {
                passport.authenticate('local')(req, res, function() {
                    req.session.save(function(err, next) {
                        if (err)
                            return next(err)
                        res.redirect('/dashboard')
                    })
                })
            }
        })

    } else {
        res.render('register', {alert: 'Confirm Password not matched'})
    }
});

router.get('/login', function(req, res, next) {
    res.render('login', {title: 'Auth System'});
});

router.post('/login', function(req, res, next) {
    req.session.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/login')
        }
    })
});

module.exports = router;
