"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PrescriptionItems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      PrescriptionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Prescriptions",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      medicineName: {
        type: Sequelize.STRING,
      },
      dosage: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PrescriptionItems");
  },
};
