const Sequelize = require("sequelize");
mmodule.exports = (sequelize, DataTypes) => {
  const Dish = sequelize.define('Dish', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    isReady: {
      type: DataTypes.STRING,
      defaultValue: '0',
    },
  });
  //Table table with Dish Table connect "many to many"
  Dish.associate = function(models) {
    Dish.belongsToMany(models.Table, {
      through: 'TableDishes',
      as: 'tables',
      foreignKey: 'dishId',
      otherKey: 'tableId',
    });
  };
  //Table table with Ingredient Table connect "many to many"
  Dish.associate = function(models) {
    Dish.belongsToMany(models.Ingredient, {
      through: 'IngredientDishes',
      as: 'Ingredients',
      foreignKey: 'dishId',
      otherKey: 'IngredientId',
    });
  };
  return Dish;
};
