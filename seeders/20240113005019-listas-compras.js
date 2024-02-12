'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('listas_compras', [
      {
        nome_lista: 'Mercado',
        usuario_lista: 1
      },
      {
        nome_lista: 'Petshop',
        usuario_lista: 2
      },
      {
        nome_lista: 'Feira da fruta',
        usuario_lista: 1
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('listas_compras', null, {});

  }
};
