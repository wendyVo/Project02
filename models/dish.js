module.exports = (sequelize, DataTypes) => {
    const Dish = sequelize.define('Dish', {
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
      }
    });
    //Table table with Dish Table connect "many to many"
    Dish.associate = function(models) {
        Table.belongsToMany(models.Table, {
          through: 'TableDishes',
          as: 'tables',
          foreignKey: 'dishId',
          otherKey: 'tableId'
        });
    };
    return Table;
  };