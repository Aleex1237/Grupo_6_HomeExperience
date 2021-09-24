module.exports= (sequelize, dataTypes) => {

    let alias= "KeywordExperience"

    let cols= {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
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
        timestamps: false
    }

    const KeywordExperience= sequelize.define(alias,cols,config)


    return KeywordExperience
}