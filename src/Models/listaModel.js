const { DataTypes } = require("sequelize");
const { sequelize } = require("../../models");

const listaModel = (sequelize, DataTypes) => {
    return sequelize.define('listas_compras', {
        nome_lista: DataTypes.STRING,
    })
}

module.exports = listaModel