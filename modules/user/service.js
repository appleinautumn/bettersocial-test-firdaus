class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(data) {
    return this.userRepository.create(data);
  }
}

module.exports = UserService;
