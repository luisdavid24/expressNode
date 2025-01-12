const { faker } = require('@faker-js/faker');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    const limit = 100;

    for (let index = 0; index < limit; index++) {
      this.products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.urlLoremFlickr(),
      });
    }
  }
  create() {}
  find() {
    return this.products;
  }
  findOne() {}
  update() {}
  delete() {}
}

modulo.exports = ProductService;
