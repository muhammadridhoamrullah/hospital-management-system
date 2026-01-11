"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patient.belongsTo(models.User, { foreignKey: "UserId", as: "user" });
      Patient.hasMany(models.Appointment, {
        foreignKey: "PatientId",
        as: "appointment",
      });
    }
  }
  Patient.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: {
          msg: "UserId must be unique",
        },
        validate: {
          notNull: {
            msg: "UserId is required",
          },
          notEmpty: {
            msg: "UserId is required",
          },
        },
      },
      medicalRecordNumber: {
        type: DataTypes.STRING,
        unique: {
          msg: "Medical Record Number must be unique",
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: "Medical Record Number is required",
          },
          notEmpty: {
            msg: "Medical Record Number is required",
          },
        },
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Birth Date is required",
          },
          notEmpty: {
            msg: "Birth Date is required",
          },
        },
      },
      gender: {
        type: DataTypes.ENUM("male", "female"),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Gender is required",
          },
          notEmpty: {
            msg: "Gender is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Patient",
      paranoid: true,
      timestamps: true,
    }
  );
  return Patient;
};
