const { userRouter } = require("./userRoutes");

const router = require("express").Router();

router.use("/user", userRouter);

module.exports = {
  router,
};
