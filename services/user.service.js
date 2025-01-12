const { faker } = require('@faker-js/faker');

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }
  generate() {
    const limit = 5;

    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.database.mongodbObjectId(),
        name: faker.person.fullName(),
        nickName: 'Not real ' + faker.person.fullName(),
        email: faker.internet.email(),
      });
    }
  }
  create() {}
  find() {
    return this.users;
  }
  findOne(id) {
    return this.users.find((item) => item.id === id);
  }
  update(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }
  delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UserService;
