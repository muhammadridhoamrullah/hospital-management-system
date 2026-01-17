const { UserServices } = require("../services/userServices");

class UserController {
  static async test(req, res, next) {
    try {
      const data = await UserServices.testService();

      res.status(200).json({ message: data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  UserController,
};
