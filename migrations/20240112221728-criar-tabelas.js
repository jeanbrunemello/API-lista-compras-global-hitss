'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome_usuario: {
        type: Sequelize.STRING,
        unique: true
      },
      senha: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, {
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      underscored: true
    });

    await queryInterface.createTable('listas_compras', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome_lista: {
        type: Sequelize.STRING,
        allowNull: false
      },
      usuario_lista: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, {
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      underscored: true
    });

    await queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome_produto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade_produto: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      preco_produto: {
        type: Sequelize.DECIMAL,
        defaultValue: 0.00
      },
      obtido_produto: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      listas_compras_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'listas_compras',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, {
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      underscored: true
    });

    await queryInterface.addConstraint('produtos', {
      fields: ['listas_compras_id'],
      type: 'foreign key',
      name: 'fk_produtos_listas_compras',
      references: {
        table: 'listas_compras',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryInterface.addConstraint('listas_compras', {
      fields: ['usuario_lista'],
      type: 'foreign key',
      name: 'fk_listas_compras_usuarios',
      references: {
        table: 'usuarios',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
    await queryInterface.dropTable('listas_compras');
    await queryInterface.dropTable('usuarios');
  }
};
