const { DataTypes } = require("sequelize");
const Sequelize = require('sequelize');
const database = require('../../db')

const listaModel = database.define('listas_compras', {
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
});

module.exports = listaModel