const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');


class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(data) {
    // hash password
    const hashedPassword = await hashPassword(data.password);

    const params = {
      ...data,
      id: uuidv4(),
      password: hashedPassword,
    }
    return this.userRepository.create(params);
  }
}

const hashPassword = async (password) => {
  try {
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Failed to hash password');
  }
};

module.exports = UserService;
