//Este middeleware es para detectar errores
function logErrors(err, req, res, next) {
  console.log(error);
  next(err); //Crea un middleware de tipo de error
}

//Estes es para crear un formato a los errores
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { logErrors, errorHandler };
