const validators = require('../validation/login-validation');
const responseHandler = require('../helpers/responseHandlers');

module.exports = function (schemaName) {     
    return async function(req, res, next) {
       
            const { error } = schemaName.validate(req.body);
             if (error) {
         const er = {
            message: error.details.map((details) => details.message),
         }
                res.locals.error = er;
                res.locals.status = 400,
                res.locals.message = er.message;
                responseHandler.jsonError(req, res);
            } else {
                next();
            }
        }
    }