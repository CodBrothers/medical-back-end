const express = require('express');
const docPatController = require('../Controller/docPatController');
const validatorMiddleware =require('../Middleware/validator');
const validations = require('../validation/login-validation');
const router = express.Router();

router.post('/save-doc-pat-data', docPatController.addUseradditionalData);
router.post('/update-user-data', docPatController.updateUserData);
router.post('/fetch-user-data', docPatController.fetchUserData)
router.post('/get-role-based-data', docPatController.getRoleBasedData);
router.post('/delete-user-data', docPatController.deleteRoleBasedData);
router.post('/get-data-by-id', docPatController.getDataById);
module.exports = router;