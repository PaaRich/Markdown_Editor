const ErrorObj = require("./ErrorObj");

const handleCastErrorDB = (err) => {
  const msg = `Invalid ${err.path}`;
  return new ErrorObj(msg, 400);
};

const handleDuplicateErrorDB = (err) => {
  const value = err.errmsg.match(/(["'])([\\?.])*?\1/)[0];
  const msg = `${value} is duplicate`;
  return new ErrorObj(msg, 400);
};

const devErr = (res, err) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    err,
    stackTrace: err.stack,
  });
};

const proErr = (res, err) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(err.statusCode).json({
      status: err.statusCode,
      message: "Please something went wrong try again later",
    });
  }
};
//This Global error handler should be split into two for development environment and
// and for production environment
const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "fail";

  //In development mode,we send many and useful info to the developer for easy debugging
  if (process.env.NODE_ENV === "development") {
    devErr(res, err);

    //In production mode,we send small but user-friendly response to the user
    //there 3 types of MongoDB error CastError,ValidateError,DuplicateError
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    if (error.name === "CastError") {
      error = handleCastErrorDB(error);
    }

    if (error.name === "DuplicateError") {
      error = handleDuplicateErrorDB(error);
    }

    proErr(res, error);
  }

  next();
};
module.exports = globalErrorHandler;
