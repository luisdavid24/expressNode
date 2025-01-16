const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }
  generate() {
    const limit = 15;

    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.department(),
        description: faker.lorem.sentence(),
      });
    }
  }
  async create(data) {
    const newCategory = {
      id: faker.string.uuid(),
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }
  async find() {
    return this.categories;
  }
  async findOne(id) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw boom.notFound('Category not found');
    }
    return category;
  }
  async update(id, changes) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes,
    };
    return this.categories[index];
  }
  async delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoriesService;
