const { departmentRouter } = require("./departmentRoutes");
const { doctorRouter } = require("./doctorRoutes");
const { userRouter } = require("./userRoutes");

const router = require("express").Router();

router.use("/user", userRouter);
router.use("/departments", departmentRouter);
router.use("/doctors", doctorRouter);

module.exports = {
  router,
};
