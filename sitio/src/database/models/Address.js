module.exports = (sequelize, dataTypes) => {
  let alias = "Address";

  let cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull:false
    },
    pais: {
      type: dataTypes.STRING(100),
      allowNull:true
    },
    localidad: {
      type: dataTypes.STRING(100),
      allowNull:true
    },
    provincia: {
      type: dataTypes.STRING(100),
      allowNull:true
    },
    calle: {
      type: dataTypes.STRING(100),
      allowNull:true
    },
    numero: {
      type: dataTypes.INTEGER,
      allowNull:true
    },
    codigoPostal: {
      type: dataTypes.INTEGER,
      allowNull:true
    },
    departamento: {
      type: dataTypes.STRING(100),
      allowNull:true
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
