const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index.js');

const app = express();
const port = process.env.PORT || 3000;

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler.js');

app.use(express.json());
const whitelist = ['htt://localhost:8080', 'https//myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido '));
    }
  },
};
app.use(cors(options)); //Esta es para poder informacion tipo json

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);

app.listen(port, () => {
  console.log('Mi puerto ' + port);
});

//El orden en que se ponga sera el orden de seran usado
app.use(boomErrorHandler);
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
