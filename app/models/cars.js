'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cars.init({
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    rentPerDay: DataTypes.INTEGER,
    image_id: DataTypes.INTEGER,
    createdByUser: DataTypes.INTEGER,
    lastUpdateByUser: DataTypes.INTEGER,
    createAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
    deleteAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'cars',
  });
  return cars;
};