
const express = require('express');
const authController = require('../Controller/authController');

const router = express.Router();

router.post('/login', authController.login);
router.post('/addUserData', authController.addUserData);

module.exports = router;
