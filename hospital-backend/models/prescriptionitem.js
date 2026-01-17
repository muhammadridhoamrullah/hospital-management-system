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
      PrescriptionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "PrescriptionId is required",
          },
          notEmpty: {
            msg: "PrescriptionId is required",
          },
        },
      },
      medicineName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Medicine Name is required",
          },
          notEmpty: {
            msg: "Medicine Name is required",
          },
        },
      },
      dosage: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Dosage is required",
          },
          notEmpty: {
            msg: "Dosage is required",
          },
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Quantity is required",
          },
          notEmpty: {
            msg: "Quantity is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "PrescriptionItem",
      paranoid: true,
      timestamps: true,
    }
  );
  return PrescriptionItem;
};
