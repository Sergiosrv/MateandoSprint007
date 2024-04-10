"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Elegante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clasico",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "Personalizados",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "Sin Categoría",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
