"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Capabilities",
      [
        {
          name: "250 ML",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "350 ML",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "400 ML",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "500 ML",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "650 ML",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "750 ML",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "1.0 L",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "1.2 L",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          name: "1.5 L",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "100 g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "150 g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          name: "250 g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "300 g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
         {
          name: "Sin Definir ",
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
