'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_Size.init({
    productId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_Size',
  });
  return product_Size;
};