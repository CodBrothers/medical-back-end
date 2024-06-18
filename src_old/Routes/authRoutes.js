
const express = require('express');
const authController = require('../Controller/authController');
const validatorMiddleware =require('../Middleware/validator');
const validations = require('../validation/login-validation');
const router = express.Router();

router.post('/login',validatorMiddleware( validations.getLoginSchema ), authController.login);
router.post('/addUserData', authController.addUserData);

module.exports = router;
