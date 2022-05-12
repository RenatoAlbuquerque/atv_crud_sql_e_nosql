"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Pessoas.init(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Este campo não pode ser vazio!!",
          },
          len: {
            args: [3, 20],
            msg: "Este campo deve ter entre 3 e 20 caracteres",
          },
        },
      },
      dataNasc: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Pessoas",
    }
  );
  return Pessoas;
};
