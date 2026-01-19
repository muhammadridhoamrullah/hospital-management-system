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

  static async getMyProfile(req, res, next) {
    try {

      const UserId = req.user.id;

      const user = await UserServices.getMyProfile(UserId);

      res.status(200).json({
        success: true,
        data: user,
        message: "User profile fetched successfully",
      });
    } catch (error) {
      console.log(error, "err");

      next(error);
    }
  }
}

module.exports = {
  UserController,
};
