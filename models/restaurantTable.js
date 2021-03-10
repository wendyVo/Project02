const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const RestaurantTable = sequelize.define("RestaurantTable", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    numCustomers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    dimension: {
      type: DataTypes.STRING
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  // Table table with Dish Table connect "many to many"
  RestaurantTable.associate = function(models) {
    RestaurantTable.belongsToMany(models.Dish, {
      through: "TableDishes",
      as: "dishes",
      foreignKey: "tableId",
      otherKey: "dishId",
      status: false
    });
  };
  return RestaurantTable;
};
