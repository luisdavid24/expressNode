const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { size } = req.query;

  const limit = size || 5;

  for (let index = 0; index < limit; index++) {
    categories.push({
      name: 'category' + faker.person.fullName(),
    });
  }
  res.json(categories);
});

router.get('/filterCategories', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'category' + id,
  });
});
module.exports = router;
