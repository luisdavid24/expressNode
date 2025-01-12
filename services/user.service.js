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
  update() {}
  delete() {}
}

module.exports = UserService;
