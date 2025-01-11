const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

app.get('/other', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});
router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;

  const limit = size || 5;

  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.person.fullName(),
      nickName: 'Not real' + faker.person.fullName(),
      email: faker.internet.email(),
    });
  }
  res.json(users);
});
router.get('/filterUsers', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'user' + id,
    nickName: 'nickName' + id,
    email: 'example@gmail.com',
  });
});

module.exports = router;
//http://localhost:3000/users?limit=10&offset=20
