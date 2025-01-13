const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false }); // abortEarly Esto permite mandar todos errores de una vez
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;

/*
la informacion del req se obtiene de manera diferente maneras dependiendo
de donde la obtengamos:
si es un post sera req.body
si es un get  req.params
tambien puede venir de req.query */
