"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointment.belongsTo(models.Patient, {
        foreignKey: "PatientId",
        as: "patient",
      });
      Appointment.belongsTo(models.Doctor, {
        foreignKey: "DoctorId",
        as: "doctor",
      });
      Appointment.hasOne(models.MedicalRecord, {
        foreignKey: "AppointmentId",
        as: "medicalRecord",
      });
    }
  }
  Appointment.init(
    {
      PatientId: DataTypes.INTEGER,
      DoctorId: DataTypes.INTEGER,
      appointmentDate: DataTypes.DATE,
      appointmentTime: DataTypes.TIME,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Appointment",
    }
  );
  return Appointment;
};
