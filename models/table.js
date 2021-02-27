module.exports = (sequelize, DataTypes) => {
    const Table = sequelize.define('Table', {
      chair: {
        type: DataTypes.TEXT,
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
    //Table table with Menu Table connect "many to many"
    Table.associate = function(models) {
        Table.belongsToMany(models.Menu, {
          through: 'TableMenus',
          as: 'menus',
          foreignKey: 'tableId',
          otherKey: 'menuId'
        });
      };
    return Table;
  };