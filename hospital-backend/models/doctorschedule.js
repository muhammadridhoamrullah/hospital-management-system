"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DoctorSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DoctorSchedule.belongsTo(models.Doctor, {
        foreignKey: "DoctorId",
        as: "doctor",
      });
    }
  }
  DoctorSchedule.init(
    {
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
      dayOfWeek: {
        type: DataTypes.STRING,

        allowNull: false,
        validate: {
          notNull: {
            msg: "Day of the week is required",
          },
          notEmpty: {
            msg: "Day of the week is required",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "available",
        validate: {
          notNull: {
            msg: "Status is required",
          },
          notEmpty: {
            msg: "Status is required",
          },
        },
      },
      startTime: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Start time is required",
          },
          notEmpty: {
            msg: "Start time is required",
          },
        },
      },
      endTime: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull: {
            msg: "End time is required",
          },
          notEmpty: {
            msg: "End time is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "DoctorSchedule",
      paranoid: true,
      timestamps: true,
    }
  );
  return DoctorSchedule;
};
