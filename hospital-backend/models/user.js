"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Doctor, { foreignKey: "UserId", as: "doctorProfile" });
      User.hasOne(models.Patient, {
        foreignKey: "UserId",
        as: "patientProfile",
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Email is already registered",
        },
        validate: {
          notNull: {
            msg: "Email is required",
          },
          notEmpty: {
            msg: "Email is required",
          },
          isEmail: {
            msg: "Format email is invalid",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is required",
          },
          notEmpty: {
            msg: "Password is required",
          },
          len: {
            args: [6, 25],
            msg: "Password must be between 6 to 25 characters",
          },
        },
      },
      role: {
        type: DataTypes.ENUM("doctor", "patient", "admin", "nurse"),
        allowNull: false,
        defaultValue: "patient",
        validate: {
          notNull: {
            msg: "Role is required",
          },
          notEmpty: {
            msg: "Role is required",
          },
          isIn: {
            args: [["doctor", "patient", "admin", "nurse"]],
            msg: "Role must be one of: doctor, patient, admin, nurse",
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        unique: {
          msg: "Phone Number is already registered",
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: "Phone Number is required",
          },
          notEmpty: {
            msg: "Phone Number is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      paranoid: true,
      timestamps: true,
    }
  );
  User.beforeCreate(async (user) => {
    user.email = user.email.toLowerCase();
    user.password = await hashPassword(user.password);
    
  });
  return User;
};
