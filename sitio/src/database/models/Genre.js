module.exports = (sequelize, dataTypes) => {
  let alias = "Genre";

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
    tableName: "genres",
    timestamps: false,
  };

  const Genre = sequelize.define(alias, cols, config);

  Genre.associate = (models) => {
    Genre.hasMany(models.User, {
      as: "users",
      foreignKey: "idGenre",
    });
  };

  return Genre;
};
