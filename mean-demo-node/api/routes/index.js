const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const constConfig = require('../config/constConfig')

const auth = jwt({
    secret: constConfig.MY_SECRET,
    userProperty: 'payload',
    algorithms: ['RS256']
});

/**
 *  controllers
 */
const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');




/**
 *  API router
 */

// profile
router.get('/profile/', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;