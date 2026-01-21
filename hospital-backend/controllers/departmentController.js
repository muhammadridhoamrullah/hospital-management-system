const { DepartmentServices } = require("../services/departmentServices");

class DepartmentController {
  static async createDepartment(req, res, next) {
    try {
      const { name, description } = req.body;

      const department = await DepartmentServices.creatingDepartment({
        name,
        description,
      });

      res.status(201).json({
        success: true,
        data: department,
        message: "Department created successfully",
      });
    } catch (error) {
      console.log(error, "err");

      next(error);
    }
  }

  static async getAllDepartments(req, res, next) {
    try {
      const departments = await DepartmentServices.getDepartments();

      res.status(200).json({
        success: true,
        data: departments,
        message: "Departments retrieved successfully",
      });
    } catch (error) {
      console.log(error, "err");

      next(error);
    }
  }
}

module.exports = {
  DepartmentController,
};
