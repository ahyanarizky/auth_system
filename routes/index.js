var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Auth System'});
});

router.get('/register', function(req, res, next) {
    res.render('register', {title: 'Auth System'});
});

router.get('/login', function(req, res, next) {
    res.render('login', {title: 'Auth System'});
});

module.exports = router;
