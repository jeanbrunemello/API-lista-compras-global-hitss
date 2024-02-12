const { DataTypes, Model } = require("sequelize");
const Sequelize = require('sequelize');
const database = require('../../db')

class Produto extends Model { }

Produto.init(
    {
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
        },
        preco_produto: {
            type: Sequelize.DECIMAL,
        },
        obtido_produto: {
            type:Sequelize.BOOLEAN,
            allowNull: false,
        },
        listas_compras_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'listas_compras',
                key: 'id',
            }
        }
    },
    {
        sequelize: database,
        modelName: 'produtos'
    }
);

module.exports = Produto