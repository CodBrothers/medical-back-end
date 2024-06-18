
const express = require('express');
const appointmentController = require('../Controller/appointmentController');
const validatorMiddleware =require('../Middleware/validator');
const validations = require('../validation/login-validation');
const router = express.Router();

router.post('/create-new-appoint', appointmentController.createNewUser);
router.post('/find-user-by-id', appointmentController.fetchUserById);
router.get('/find-all-data', appointmentController.fetchAllData);
router.post('/update-by-id', appointmentController.updateById);
router.post('/delete-by-id', appointmentController.deleteById);

module.exports = router;