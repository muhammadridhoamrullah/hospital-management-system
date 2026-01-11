"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Department.hasMany(models.Doctor, {
        foreignKey: "DepartmentId",
        as: "doctors",
      });
    }
  }
  Department.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: {
          msg: "Department Name must be unique",
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: "Department Name is required",
          },
          notEmpty: {
            msg: "Department Name is required",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description is required",
          },
          notEmpty: {
            msg: "Description is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Department",
      paranoid: true,
      timestamps: true,
    }
  );
  return Department;
};
