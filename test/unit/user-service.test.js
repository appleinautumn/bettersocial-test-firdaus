const chai = require('chai');
const { faker } = require('@faker-js/faker');
const sinon = require('sinon');
const { v4: uuidv4 } = require('uuid');

const { expect } = chai;
const { createUserRepository, createUserService } = require('../../modules');

const db = {
  query() {},
};

const userRepository = createUserRepository(db);
const userService = createUserService(userRepository);

describe('User Service Unit Test', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('tests create method', async () => {
    const params = {
      username: faker.internet.userName(),
      name: faker.person.fullName(),
      profilePicture: faker.image.url(),
      password: faker.string.alphanumeric(10),
    };

    const stubResponse = {
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      username: params.username,
      name: params.name,
      profilePicture: params.profilePicture,
      password: params.password,
    };

    // stub get
    const stub = sinon.stub(userRepository, 'create').returns(stubResponse);

    // create
    const res = await userService.create(params);

    expect(stub.calledOnce).to.be.true;
    expect(res.length).to.equal(stubResponse.length);
    expect(res.id).to.equal(stubResponse.id);
    expect(res.createdAt).to.equal(stubResponse.createdAt);
    expect(res.updatedAt).to.equal(stubResponse.updatedAt);
    expect(res.username).to.equal(stubResponse.username);
    expect(res.name).to.equal(stubResponse.name);
    expect(res.profilePicture).to.equal(stubResponse.profilePicture);
    expect(res.password).to.equal(stubResponse.password);
  });
});
