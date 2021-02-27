odule.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      }
    }
  });
  //Menu table with  Ingredient Table connect "many to many"
  Menu.associate = function(models) {
    Menu.belongsToMany(models.Ingredient, {
      through: 'IngredientMenus',
      as: 'ingredients',
      foreignKey: 'menuId',
      otherKey: 'ingredientId'
    });
  };
  return Menu;
};