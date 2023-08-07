const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { faker } = require('@faker-js/faker');
const sinon = require('sinon');
const { v4: uuidv4 } = require('uuid');

const { expect } = chai;
chai.use(chaiAsPromised);
const {
  createApiController,
  createUserRepository,
  createUserService,
} = require('../../modules');

const db = { query() {} };

const userRepository = createUserRepository(db);
const userService = createUserService(userRepository);
const apiController = createApiController(userService);

describe('API Controller Unit Test', () => {
  let success;
  let json;
  let status;
  let res;
  let next;

  beforeEach(() => {
    success = sinon.spy();
    json = sinon.spy();
    status = sinon.stub();
    res = { success, json, status };
    next = sinon.spy();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Test createUser method', async () => {
    it('should register a user', async () => {
      const req = {
        params: {},
        query: {},
        body: {
          username: faker.internet.userName(),
          name: faker.person.fullName(),
          profilePicture: faker.image.url(),
          password: faker.string.alphanumeric(10),
        },
      };

      const stubResponse = {
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
        username: req.body.username,
        name: req.body.name,
        profilePicture: req.body.profilePicture,
        password: req.body.password,
      };      

      // stub createUser
      const stub1 = sinon.stub(userService, 'create').returns(stubResponse);

      // call register
      await apiController.register(req, res, next);

      expect(stub1.calledOnce).to.be.true;

      expect(json.args[0][0].id).to.equal(stubResponse.id);
      expect(json.args[0][0].username).to.equal(stubResponse.username);
      expect(json.args[0][0].name).to.equal(stubResponse.name);
      expect(json.args[0][0].profilePicture).to.equal(stubResponse.profilePicture);
    });
  });
});
