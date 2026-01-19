const { UserServices } = require("../services/userServices");

class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const login = await UserServices.login({ email, password });

      res.status(200).json({
        success: true,
        data: login.access_token,
        message: "User logged in successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  UserController,
};
