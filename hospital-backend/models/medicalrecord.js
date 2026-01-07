"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MedicalRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MedicalRecord.belongsTo(models.Appointment, {
        foreignKey: "AppointmentId",
        as: "appointment",
      });
      MedicalRecord.hasOne(models.Prescription, {
        foreignKey: "MedicalRecordId",
        as: "prescription",
      });
    }
  }
  MedicalRecord.init(
    {
      AppointmentId: DataTypes.INTEGER,
      diagnosis: DataTypes.TEXT,
      notes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "MedicalRecord",
    }
  );
  return MedicalRecord;
};
