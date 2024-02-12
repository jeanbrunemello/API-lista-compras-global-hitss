'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('produtos', [
      {
        nome_produto: 'arroz',
        quantidade_produto: 1,
        preco_produto: 9.99,
        obtido_produto: true,
        listas_compras_id: 1
      },
      {
        nome_produto: 'feijão',
        quantidade_produto: 2,
        preco_produto: 4.58,
        obtido_produto: false,
        listas_compras_id: 1
      },
      {
        nome_produto: 'coca-coa',
        quantidade_produto: 3,
        preco_produto: 12.99,
        obtido_produto: false,
        listas_compras_id: 1
      },
      {
        nome_produto: 'orelha de porco desidratada',
        quantidade_produto: 3,
        preco_produto: 6.99,
        obtido_produto: true,
        listas_compras_id: 2
      },
      {
        nome_produto: 'bravecto',
        quantidade_produto: 1,
        preco_produto: 199.99,
        obtido_produto: false,
        listas_compras_id: 2
      },
      {
        nome_produto: 'laranja',
        quantidade_produto: 5,
        preco_produto: 5.55,
        obtido_produto: true,
        listas_compras_id: 3
      },
      {
        nome_produto: 'morango',
        quantidade_produto: 1,
        preco_produto: 9.99,
        obtido_produto: true,
        listas_compras_id: 3
      },
      {
        nome_produto: 'banana',
        quantidade_produto: 1,
        preco_produto: 4.58,
        obtido_produto: true,
        listas_compras_id: 3
      },
      {
        nome_produto: 'jaca pro meu bem',
        quantidade_produto: 1,
        preco_produto: 18.59,
        obtido_produto: false,
        listas_compras_id: 3
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('produtos', null, {});

  }
};
