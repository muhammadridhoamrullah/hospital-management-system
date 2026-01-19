const { UserController } = require("../controllers/userController");
const { authentication } = require("../middlewares/authentication");

const userRouter = require("express").Router();

userRouter.post("/login", UserController.login);

// Route di bawah ini butuh authentication
userRouter.use(authentication);

module.exports = {
  userRouter,
};
