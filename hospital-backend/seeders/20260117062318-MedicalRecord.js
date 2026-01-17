"use strict";
let data = require("../data/medicalRecords.json");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data = data.map((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("MedicalRecords", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("MedicalRecords", null, {});
  },
};
