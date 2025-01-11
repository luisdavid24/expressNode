const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy tu nueva ruta');
});

app.get('/caterories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});
app.listen(port, () => {
  console.log('Mi puerto ' + port);
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
}); //http://localhost:3000/users?limit=10&offset=20

app.get('/purchaseOrders', (req, res) => {
  res.json([
    { name: 'orden1', value: 2000 },
    { name: 'orden2', value: 3000 },
  ]);
});
app.get('/purchaseOrders/:id', (req, res) => {
  //console.log(req);
  const { id } = req.params;
  res.json({ id, name: 'orden1' + id, value: 2000 });
});

app.get('/userr', (res, req) => {
  res.json([
    { name: 'user1', nickName: 'nickName1' },
    { name: 'user2', nickName: 'nickName2' },
    { name: 'user3', nickName: 'nickName3' },
  ]);
});

app.get('/userr/:id', (res, req) => {
  const { id } = req.params;
  res.json({ id, name: 'user' + id, nickName: 'nickName' + id });
});
