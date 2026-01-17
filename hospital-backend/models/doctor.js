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
      UserId: {
        type: DataTypes.INTEGER,
        unique: {
          msg: "UserId must be unique",
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: "UserId is required",
          },
          notEmpty: {
            msg: "UserId is required",
          },
        },
      },
      DepartmentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      licenseNumber: {
        type: DataTypes.STRING,
        unique: {
          msg: "License Number must be unique",
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: "License Number is required",
          },
          notEmpty: {
            msg: "License Number is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Doctor",
      paranoid: true,
      timestamps: true,
    }
  );
  return Doctor;
};
