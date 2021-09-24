module.exports = (sequelize, dataTypes) => {
  let alias = "Address";

  let cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
    },
    pais: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    localidad: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    provincia: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    calle: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    numero: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    codigoPostal: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    departamento: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
  };

  const config = {
    tableName: "addresses",
    timestamps: false,
  };

  const Address = sequelize.define(alias, cols, config);

  Address.associate = (models) => {
    Address.hasMany(models.User, {
      as: "users",
      foreignKey: "idAddress",
    });
  };

  return Address;
};
