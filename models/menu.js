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
    return Menu;
};