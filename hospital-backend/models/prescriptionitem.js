"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PrescriptionItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PrescriptionItem.belongsTo(models.Prescription, {
        foreignKey: "PrescriptionId",
        as: "prescription",
      });
    }
  }
  PrescriptionItem.init(
    {
      PrescriptionId: DataTypes.INTEGER,
      medicineName: DataTypes.STRING,
      dosage: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PrescriptionItem",
    }
  );
  return PrescriptionItem;
};
