const productsRouter = require('./products.router');
const userRouter = require('./user.router');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', userRouter);
}

module.exports = routerApi;
