const express = require('express');
const CategoriesService = require('./../services/categories.service');
const validatorHandler = require('./../middlewares/validator.handler');

const {
  createCategoriesSchema,
  updateCategoriesSchema,
  getCategoriesSchema,
} = require('./../schemas/categories.schema');

const service = new CategoriesService();
const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.get('/filterCategories', (req, res) => {
  res.send('Yo soy un filter');
});

router.get(
  '/:id',
  validatorHandler(getCategoriesSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createCategoriesSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(201).json(newCategory);
  },
);

router.patch(
  '/:id',
  validatorHandler(getCategoriesSchema, 'params'),
  validatorHandler(updateCategoriesSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  },
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await service.delete(id);

  res.json(response);
});
module.exports = router;
