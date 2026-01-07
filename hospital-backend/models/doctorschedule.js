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
      DoctorId: DataTypes.INTEGER,
      dayOfWeek: DataTypes.STRING,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "DoctorSchedule",
    }
  );
  return DoctorSchedule;
};
