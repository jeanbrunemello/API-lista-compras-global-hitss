const { DataTypes } = require("sequelize");
const { sequelize } = require("../../models");

const produtoModel = (sequelize, DataTypes) => {
    return sequelize.define('produtos', {
        nome_produto: DataTypes.STRING,
        quantidade_produto: DataTypes.INTEGER,
        preco_produto: DataTypes.DECIMAL,
        listas_compras_id: DataTypes.INTEGER
    })
}

module.exports = produtoModel