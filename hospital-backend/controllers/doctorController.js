const { DoctorServices } = require("../services/doctorServices");

class DoctorController {
  static async createDoctor(req, res, next) {
    try {
      const { UserId, DepartmentId, licenseNumber } = req.body;

      const doctor = await DoctorServices.createDoctor({
        UserId,
        DepartmentId,
        licenseNumber,
      });

      res.status(201).json({
        success: true,
        data: doctor,
        message: "Doctor created successfully",
      });
    } catch (error) {
      console.log(error, "err");

      next(error);
    }
  }

  static async getAllDoctors(req, res, next) {
    try {
      const doctors = await DoctorServices.getAllDoctors();

      res.status(200).json({
        success: true,
        data: doctors,
        message: "Doctors retrieved successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  DoctorController,
};
