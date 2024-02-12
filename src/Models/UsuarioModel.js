const { DataTypes, Model } = require("sequelize");
const Sequelize = require('sequelize');
const database = require('../../db')

class Usuario extends Model { }

Usuario.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_usuario: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: database,
        modelName: 'usuarios'
    }
);

module.exports = Usuario