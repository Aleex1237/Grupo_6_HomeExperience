module.exports = (sequelize, dataTypes) => {
  let alias = "Rol";

  let cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
    },
    name: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  const config = {
    tableName: "rols",
    timestamps: false,
  };

  const Rol = sequelize.define(alias, cols, config);

  Rol.associate = (models) => {
    Rol.hasMany(models.User, {
      as: "users",
      foreignKey: "idRol",
    });
  };

  return Rol;
};
