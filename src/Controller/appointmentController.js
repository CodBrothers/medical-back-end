const appService = require('../Services/appointmentService');
const responseHandler = require('../helpers/responseHandlers');

const createNewUser = async (req, res) => {
    try {
      const data = req.body;
      const user = await appService.createNewUser(data);
      res.locals.data = user;
      responseHandler.jsonSuccess(req, res);
    } catch (error) {
      res.locals.errorCode = error.statusCode || 500;
      res.locals.message = error.message || 'Internal server error';
      responseHandler.jsonError(req, res);
    }
  };

const fetchUserById = async(req, res) => {
  try{

    const data = req.body;
    const user = await appService.fetchUserById(data);
    res.locals.data = user,
    responseHandler.jsonSuccess(req, res);
  } catch (error) {
    res.locals.errorCode = error.statusCode || 500;
    res.locals.message = error.message || 'Internal server error';
    responseHandler.jsonError(req, res);
  }
}

const fetchAllData = async(req, res)=>{
  try{
    const user = await appService.fetchAllData();
    res.locals.data = user,
    responseHandler.jsonSuccess(req, res);
  } catch (error) {
    res.locals.errorCode = error.statusCode || 500;
    res.locals.message = error.message || 'Internal server error';
    responseHandler.jsonError(req, res);
  }
}

const updateById = async(req, res) => {
  try{
    const data = req.body;
    const user = await appService.updateById(data);
    res.locals.data = user,
    responseHandler.jsonSuccess(req, res);
  } catch (error) {
    res.locals.errorCode = error.statusCode || 500;
    res.locals.message = error.message || 'Internal server error';
    responseHandler.jsonError(req, res);
  }
}

const deleteById = async(req, res) => {
  try{
    const data = req.body;
    const user = await appService.deleteById(data);
    res.locals.data = user,
    responseHandler.jsonSuccess(req, res);
  } catch (error) {
    res.locals.errorCode = error.statusCode || 500;
    res.locals.message = error.message || 'Internal server error';
    responseHandler.jsonError(req, res);
  }
}
  module.exports = {
    sendReminder,
    createNewUser,
    fetchUserById,
    fetchAllData,
    updateById,
    deleteById
  }