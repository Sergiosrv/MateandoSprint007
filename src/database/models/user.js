"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
      age: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      phone: {
        type: DataTypes.STRING,
        defaultValue: "N/A",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
