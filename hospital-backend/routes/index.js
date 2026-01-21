const { departmentRouter } = require("./departmentRoutes");
const { userRouter } = require("./userRoutes");

const router = require("express").Router();

router.use("/user", userRouter);
router.use("/departments", departmentRouter);

module.exports = {
  router,
};
