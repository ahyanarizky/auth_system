const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const passport = require('passport')

/* GET home page. */
router.get('/', controller.getHomePage);

router.get('/register', controller.registerForm);

router.post('/register', controller.registerProcess);

router.get('/login', controller.loginForm);

router.post('/login', passport.authenticate('local'), controller.loginProcess);

router.get('/logout', controller.logout)

module.exports = router;
