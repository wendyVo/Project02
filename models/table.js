module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    num_customers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1],
      },
    }
  });
  //Table table with Dish Table connect "many to many"
  Table.associate = function(models) {
      Table.belongsToMany(models.Dish, {
        through: 'TableDishes',
        as: 'dishes',
        foreignKey: 'tableId',
        otherKey: 'dishId'
      });
  };
  return Table;
};