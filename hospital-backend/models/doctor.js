"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doctor.belongsTo(models.User, { foreignKey: "UserId", as: "user" });
      Doctor.belongsTo(models.Department, {
        foreignKey: "DepartmentId",
        as: "department",
      });
      Doctor.hasMany(models.DoctorSchedule, {
        foreignKey: "DoctorId",
        as: "schedules",
      });
      Doctor.hasMany(models.Appointment, {
        foreignKey: "DoctorId",
        as: "appointments",
      });
      Doctor.hasMany(models.Prescription, {
        foreignKey: "DoctorId",
        as: "prescriptions",
      });
    }
  }
  Doctor.init(
    {
      UserId: DataTypes.INTEGER,
      DepartmentId: DataTypes.INTEGER,
      licenseNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Doctor",
    }
  );
  return Doctor;
};
