module.exports = (sequelize, dataTypes) => {
  let alias = "User";

  let cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
    },
    name: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    dateBirth: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    avatar: {
      type: dataTypes.STRING(255),
      allowNull: true,
    },
    idGenre: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    idRol: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    idAddress: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  const config = {
    tableName: "users",
    timestamps: false,
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = (models) => {
    User.belongsTo(models.Genre, {
      as: "genre",
      foreignKey: "idGenre",
    });

    User.belongsTo(models.Rol, {
      as: "rol",
      foreignKey: "idRol",
    });

    User.belongsTo(models.Address, {
      as: "address",
      foreignKey: "idAddress",
    });
    /* User.hasMany(models.Cart,{
      as:"cart",
      foreignKey:"idUser"
    }) */
  };

  return User;
};
