"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Prescription.belongsTo(models.MedicalRecord, {
        foreignKey: "MedicalRecordId",
        as: "medicalRecord",
      });
      Prescription.belongsTo(models.Doctor, {
        foreignKey: "DoctorId",
        as: "doctor",
      });
      Prescription.hasMany(models.PrescriptionItem, {
        foreignKey: "PrescriptionId",
        as: "prescriptionItems",
      });
    }
  }
  Prescription.init(
    {
      MedicalRecordId: DataTypes.INTEGER,
      DoctorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Prescription",
    }
  );
  return Prescription;
};
