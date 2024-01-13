'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('listas_compras', [{
      nome_lista: 'lista 1',
    }], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('listas_compras', null, {});
    
  }
};
