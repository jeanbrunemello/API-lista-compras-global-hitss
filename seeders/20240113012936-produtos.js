'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('produtos', [
      {
        nome_produto: 'arroz',
        quantidade_produto: 2,
        preco_produto: 9.99,
        listas_compras_id: 1
      },
      {
        nome_produto: 'feijão',
        quantidade_produto: 1,
        preco_produto: 4.58,
        listas_compras_id: 1
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('produtos', null, {});

  }
};
