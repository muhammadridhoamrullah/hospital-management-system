const { Doctor, User, Department, DoctorSchedule } = require("../models/index");

class DoctorServices {
  static async createDoctor({ UserId, DepartmentId, licenseNumber }) {
    if (!UserId || !DepartmentId || !licenseNumber) {
      throw { name: "DOCTOR_INPUT_INVALID" };
    }

    const newDoctor = await Doctor.create({
      UserId,
      DepartmentId,
      licenseNumber,
    });

    return newDoctor;
  }

  static async getAllDoctors() {
    const doctors = await Doctor.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: { exclude: ["pasword"] },
        },
        {
          model: Department,
          as: "department",
        },
      ],
    });
    return doctors;
  }
}

module.exports = {
  DoctorServices,
};

// DOCTOR_INPUT_INVALID
