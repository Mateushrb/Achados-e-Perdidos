'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Achados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Achados.init({
    nome_item: DataTypes.STRING,
    descricao: DataTypes.STRING,
    quem_achou: DataTypes.STRING,
    local: DataTypes.STRING,
    data: DataTypes.DATE,
    hora_aproximada: DataTypes.STRING,
    dono_encontrado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Achados',
  });
  return Achados;
};