const { DataTypes, Model } = require("sequelize");
const Sequelize = require('sequelize');
const database = require('../../db')

class ListaCompras extends Model { }

ListaCompras.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome_lista: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        sequelize: database,
        modelName: 'listas_compras'
    }
);

module.exports = ListaCompras;


// const Lista = database.define('listas_compras', {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false
//     },
//     nome_lista: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

//module.exports = ListaCompras