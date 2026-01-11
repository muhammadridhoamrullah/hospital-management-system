"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DoctorSchedules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      DoctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Doctors",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      dayOfWeek: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "available",
      },
      startTime: {
        type: Sequelize.TIME,
      },
      endTime: {
        type: Sequelize.TIME,
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
    await queryInterface.dropTable("DoctorSchedules");
  },
};
