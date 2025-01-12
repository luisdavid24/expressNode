const express = require('express');
const UserService = require('./../services/user.service');

const router = express.Router();
const service = new UserService();

router.get('/other', (req, res) => {
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
  const users = service.find();

  res.json(users);
});
router.get('/filterUsers', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
});
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.json(user);
});
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const response = service.delete(id);

  res.json(response);
});
module.exports = router;
//http://localhost:3000/users?limit=10&offset=20
