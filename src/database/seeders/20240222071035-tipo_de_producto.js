"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Typeproducts",
      [
        {
          name: "mate",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "termo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "yerbero",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bombilla",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "combo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bolso",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Typeproducts", null, {});
  },
};
