module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    supplier: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    }
  });
  return Ingredient;
};