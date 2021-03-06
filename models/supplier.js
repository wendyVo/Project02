var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define("Supplier", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  //Supplier table with  Ingredient Table connect "many to many"
  Supplier.associate = function(models) {
    Supplier.belongsToMany(models.Ingredient, {
      through: "IngredientSuppliers",
      as: "ingredients",
      foreignKey: "supplierId",
      otherKey: "ingredientId"
    });
  };
  return Supplier;
};
