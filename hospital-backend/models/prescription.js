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
      MedicalRecordId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: {
          msg: "MedicalRecordId must be unique",
        },
        validate: {
          notNull: {
            msg: "MedicalRecordId is required",
          },
          notEmpty: {
            msg: "MedicalRecordId is required",
          },
        },
      },
      DoctorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "DoctorId is required",
          },
          notEmpty: {
            msg: "DoctorId is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Prescription",
      paranoid: true,
      timestamps: true,
    }
  );
  return Prescription;
};
