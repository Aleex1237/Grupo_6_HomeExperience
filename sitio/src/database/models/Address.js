module.exports = (sequelize, dataTypes) => {
  let alias = "Adress";

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

  const Adress = sequelize.define(alias, cols, config);

  Address.hasMany(models.User, {
    as: "users",
    foreignKey: "idAddress",
  });

  return Adress;
};
