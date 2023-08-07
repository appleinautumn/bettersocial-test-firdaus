const ApiController = require('./controller/api');
const UserRepository = require('./user/repository');
const UserService = require('./user/service');

function createApiController(userService) {
    return new ApiController(userService);
}

function createUserRepository(db) {
    return new UserRepository(db);
}

function createUserService(repo, repo2) {
    return new UserService(repo, repo2);
}

module.exports = {
    createApiController,
    createUserRepository,
    createUserService,
};
