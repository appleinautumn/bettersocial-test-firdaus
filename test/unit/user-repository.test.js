const chai = require('chai');
const { faker } = require('@faker-js/faker');
const { DateTime } = require('luxon');
const sinon = require('sinon');
const { v4: uuidv4 } = require('uuid');

const { expect } = chai;
const { createUserRepository } = require('../../modules');

const db = {
  query() {},
};

const userRepository = createUserRepository(db);

describe('User Repository Unit Test', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('tests create method', async () => {
    const params = {
      id: uuidv4(),
      username: faker.internet.userName(),
      name: faker.person.fullName(),
      profilePicture: faker.image.url(),
      password: faker.internet.password(),
    };

    const stubResponse = {
      rows: [{
        id: params.id,
        created_at: new Date(),
        updated_at: new Date(),
        username: params.username,
        name: params.name,
        profile_picture: params.profilePicture,
        password: params.password,
      }],
    };

    // stub query
    const stub = sinon.stub(db, 'query').returns(stubResponse);

    // call create
    const res = await userRepository.create(params);

    expect(stub.calledOnce).to.be.true;
    expect(res.length).to.equal(stubResponse.length);
    expect(res.id).to.equal(stubResponse.rows[0].id);
    expect(res.createdAt).to.equal(stubResponse.rows[0].created_at);
    expect(res.updatedAt).to.equal(stubResponse.rows[0].updated_at);
    expect(res.username).to.equal(stubResponse.rows[0].username);
    expect(res.name).to.equal(stubResponse.rows[0].name);
    expect(res.profilePicture).to.equal(stubResponse.rows[0].profile_picture);
    expect(res.password).to.equal(stubResponse.rows[0].password);
  });
});
