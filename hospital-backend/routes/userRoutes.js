const { UserController } = require("../controllers/userController");
const { authentication } = require("../middlewares/authentication");

const userRouter = require("express").Router();

userRouter.post("/login", UserController.login);
// userRouter.post("/register", UserController.register)

// Route di bawah ini butuh authentication
userRouter.use(authentication);

userRouter.get("/my-profile", UserController.getMyProfile);

module.exports = {
  userRouter,
};
