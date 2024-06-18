const appService = require('../Services/docPat-service');
const responseHandler = require('../helpers/responseHandlers');

const addUseradditionalData = async (req, res) => {
    try{
    const data = req.body;
  
    const user = await appService.addUserAdditionalData(data);
    res.locals.data = user;
    responseHandler.jsonSuccess(req, res);
  } catch(error) {
    res.locals.error = error;
    res.locals.errorCode = error.statusCode || 500;
    res.locals.message = error.message || 'Internal server error';
    responseHandler.jsonError(req, res);
  }
};

const updateUserData = async (req, res) => {
  try{
  const data = req.body;
  const user = await appService.updateUserData(data);
  res.locals.data = user;
  responseHandler.jsonSuccess(req, res);
} catch(error) {
  res.locals.error = error;
  res.locals.errorCode = error.statusCode || 500;
  res.locals.message = error.message || 'Internal server error';
  responseHandler.jsonError(req, res);
}
};

const fetchUserData = async (req, res) => {
  try{
  const data = req.body;
  const user = await appService.fetchUserData(data);
  res.locals.data = user;
  responseHandler.jsonSuccess(req, res);
} catch(error) {
  res.locals.error = error;
  res.locals.errorCode = error.statusCode || 500;
  res.locals.message = error.message || 'Internal server error';
  responseHandler.jsonError(req, res);
}
};

const getRoleBasedData = async (req,res) => {
  try{
    const data = req.body;
    const user = await appService.getRoleBasedData(data);
    res.locals.data = user;
    responseHandler.jsonSuccess(req, res);
  } catch (error) {
    res.locals.error = error;
    res.locals.errorCode = error.statusCode || 500;
    res.locals.message = error.message || 'Internal server error';
    responseHandler.jsonError(req, res);
  }
}
  module.exports ={ 
    addUseradditionalData,
    updateUserData,
    fetchUserData,
    getRoleBasedData
  }