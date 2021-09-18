module.exports= (sequelize, dataTypes) => {

    let alias= "Keyword"

    let cols= {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: dataTypes.INTEGER.UNSIGNED,
        }
    }

    let config= {
        tableName: 'keywords',
        defaultValue: null
    }

    const Keyword= sequelize.define(alias,cols,config)

    Keyword.associate= models => {
        Keyword.belongsToMany(models.Experience,{
            as : 'experiences',
            through : 'KeywordExperience',
            foreignKey : 'idKeywords',
            otherKey : 'idExperience'
        })
    }
  

    return Keyword
}