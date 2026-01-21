const { DepartmentController } = require("../controllers/departmentController");
const { authentication } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");

const departmentRouter = require("express").Router();

departmentRouter.use(authentication);

departmentRouter.post(
  "/",
  authorization(["admin"]),
  DepartmentController.createDepartment,
);
departmentRouter.get("/", DepartmentController.getAllDepartments);

module.exports = {
  departmentRouter,
};
