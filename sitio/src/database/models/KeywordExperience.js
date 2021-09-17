module.exports= (sequelize, dataTypes) => {

    let alias= "KeywordExperience"

    let cols= {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idExperience:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        idKeywords:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }

    }

    let config= {
        tableName: 'keywords_experience',
        defaultValue: null
    }

    const KeywordExperience= sequelize.define(alias,cols,config)


    return KeywordExperience
}