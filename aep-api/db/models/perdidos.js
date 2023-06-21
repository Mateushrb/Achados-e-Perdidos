'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perdidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Perdidos.init({
    nome_item: DataTypes.STRING,
    descricao: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    item_encontrado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Perdidos',
  });
  return Perdidos;
};