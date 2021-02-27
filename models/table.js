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
    return Table;
  };