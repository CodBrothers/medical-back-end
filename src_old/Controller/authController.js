const authService = require('../Services/login');
const responseHandler = require('../helpers/responseHandlers');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.authenticateUser(email, password);
    if (!user) {
      res.locals.message = 'Invalid email or password';
      res.locals.errorCode = 401; // Unauthorized
      return responseHandler.jsonError(req, res);
    }
    res.locals.data = user;
    responseHandler.jsonSuccess(req, res);
  } catch (error) {
    res.locals.errorCode = error.statusCode || 500;
    res.locals.message = error.message || 'Internal server error';
    responseHandler.jsonError(req, res);
  }
};


const addUserData = async (req, res) => {
  try{
  const data = req.body;

  const user = await authService.registerUser(data);
  res.locals.data = user;
  responseHandler.jsonSuccess(req, res);
} catch(error) {
  res.locals.error = error;
  res.locals.errorCode = error.statusCode || 500;
  res.locals.message = error.message || 'Internal server error';
  responseHandler.jsonError(req, res);
}

};

module.exports = { login, addUserData };
