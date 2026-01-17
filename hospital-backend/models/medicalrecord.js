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
      AppointmentId: {
        type: DataTypes.INTEGER,
        unique: {
          msg: "AppointmentId must be unique",
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: "AppointmentId is required",
          },
          notEmpty: {
            msg: "AppointmentId is required",
          },
        },
      },
      diagnosis: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Diagnosis is required",
          },
          notEmpty: {
            msg: "Diagnosis is required",
          },
        },
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "MedicalRecord",
      paranoid: true,
      timestamps: true,
    }
  );
  return MedicalRecord;
};
