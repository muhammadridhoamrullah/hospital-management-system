const { Department } = require("../models/index");

class DepartmentServices {
  static async creatingDepartment({ name, description }) {
    if (!name) {
      throw { name: "DEPARTMENT_INPUT_INVALID" };
    }

    // Check jika name sudah ada
    const checking = await Department.findOne({ where: { name } });

    if (checking) {
      throw { name: "DEPARTMENT_MUST_BE_UNIQUE" };
    }

    // Buat department baru
    const newDepartment = await Department.create({
      name,
      description,
    });

    return newDepartment;
  }
}

module.exports = {
  DepartmentServices,
};

// DEPARTMENT_INPUT_INVALID
// DEPARTMENT_MUST_BE_UNIQUE
