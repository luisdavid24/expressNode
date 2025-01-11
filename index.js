const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy tu nueva ruta');
});

app.get('/productos', (req, res) => {
  res.json([
    { name: 'Producto 1', price: 1000 },
    { name: 'Producto 2', price: 2500 },
  ]);
});

//req (request) res (response)
app.get('/productos/:id', (req, res) => {
  ///productos/:id aqui el id es un parametro por tiene : antes
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
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

//productos, categorias, ordenes de compra , usuarios, GET

app.get('/purchaseOrders', (req, res) => {
  res.json([
    { name: 'orden1', value: 2000 },
    { name: 'orden2', value: 3000 },
  ]);
});
app.get('/purchaseOrders/:id', (req, res) => {
  console.log(req);
  const { id } = req.params;
  res.json({ id, name: 'orden1' + id, value: 2000 });
});

app.get('/user', (res, req) => {
  res.json([
    { name: 'user1', nickName: 'nickName1' },
    { name: 'user2', nickName: 'nickName2' },
    { name: 'user3', nickName: 'nickName3' },
  ]);
});

app.get('/user/:id', (res, req) => {
  const { id } = req.params;
  res.json({ id, name: 'user' + id, nickName: 'nickName' + id });
});
