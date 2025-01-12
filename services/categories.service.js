const { faker } = require('@faker-js/faker');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }
  generate() {
    const limit = 15;

    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.database.mongodbObjectId(),
        name: 'category' + faker.person.fullName(),
      });
    }
  }
  create() {}
  find() {
    return this.categories;
  }
  findOne(id) {
    return this.categories.find((item) => item.id === id);
  }
  update() {}
  delete() {}
}

module.exports = CategoriesService;
