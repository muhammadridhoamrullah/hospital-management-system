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
      PatientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "PatientId is required",
          },
          notEmpty: {
            msg: "PatientId is required",
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
      appointmentDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Appointment Date is required",
          },
          notEmpty: {
            msg: "Appointment Date is required",
          },
        },
      },
      appointmentTime: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Appointment Time is required",
          },
          notEmpty: {
            msg: "Appointment Time is required",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "scheduled",
        validate: {
          notNull: {
            msg: "Status is required",
          },
          notEmpty: {
            msg: "Status is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Appointment",
      paranoid: true,
      timestamps: true,
    }
  );
  return Appointment;
};
