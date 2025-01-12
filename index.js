const express = require('express');
const routerApi = require('./routes/index.js');

const app = express();
const port = 3000;

const { logErrors, errorHandler } = require('./middlewares/error.handler.js');

app.use(express.json()); //Esta es para poder informacion tipo json

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);

app.listen(port, () => {
  console.log('Mi puerto ' + port);
});

//El orden en que se ponga sera el orden de seran usado
app.use(logErrors);
app.use(errorHandler);
/* app.get('/purchaseOrders', (req, res) => {
  res.json([
    { name: 'orden1', value: 2000 },
    { name: 'orden2', value: 3000 },
  ]);
});
app.get('/purchaseOrders/:id', (req, res) => {
  //console.log(req);
  const { id } = req.params;
  res.json({ id, name: 'orden1' + id, value: 2000 });
}); */

//categorys  and ordenes de compra con un path extra api/

/* app.get('/caterories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
}); */
