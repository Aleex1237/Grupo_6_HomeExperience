const sequelize = require("sequelize");
module.exports = (sequelize, dataTypes) => {
  const alias = "Cart";
  const cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    date: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    total: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    idUser: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  };
  const config = {
    tableName: "cart",
    timestamps: false,
  };
  const Cart = sequelize.define(alias, cols, config);

  Cart.associate = function (models) {
    Cart.belongsTo(models.User, {
      as: "user",
      foreingKey: "idUser",
    }),
      Cart.belongsToMany(models.Experience, {
        as: "experience",
        through: "cart_detail",
        foreignKey: "idCart",
        otherKey: "idExperience",
        timestamps: false,
      });
  };
  return Cart;
};
