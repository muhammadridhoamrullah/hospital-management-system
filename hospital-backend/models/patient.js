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
      UserId: DataTypes.INTEGER,
      medicalRecordNumber: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      gender: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Patient",
    }
  );
  return Patient;
};
