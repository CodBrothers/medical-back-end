const { StatusCodes } = require('http-status-codes');

const jsonSuccess = (req, res) => {
  const statusCode = StatusCodes.OK;
    const obj = {
        statusCode: statusCode,
        message: 'Success' 
    }
    if(res.locals.data){
      obj.data = res.locals.data;
    }
    if(res.locals.message){
      obj.message = res.locals.message | '';
    }
    if(res.locals.error && res.locals.message.error){
      obj.error = res.locals.error.message || '';
    }
    res.status(StatusCodes.OK).send(obj);
}

const jsonError = (req, res) => {
  const errorCode = res.locals.errorCode || StatusCodes.OK;
  const obj = {
    status: 'Failure',
    error: res.locals.message || '',
    statusCode: errorCode,
  };
  res.status(errorCode).send(obj);

}

module.exports = {
    jsonSuccess,
    jsonError
}