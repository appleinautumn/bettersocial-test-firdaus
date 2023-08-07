class ApiController {
  constructor(userService) {
    this.userService = userService;
  }

  async register(req, res, next) {
    try {
      const {
        username,
        name,
        profilePicture,
        password,
      } = req.body;

      // create user
      const user = await this.userService.create({
        username,
        name,
        profilePicture,
        password,
      });

      res.json(user);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = ApiController;
