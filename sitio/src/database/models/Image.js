module.exports= (sequelize, dataTypes) => {

    let alias= "Image"

    let cols= {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        idExperience:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
            }

    let config= {
        tableName: 'images',
        timeStamps: false
    }

    const Image= sequelize.define(alias,cols,config)

    Image.associate= models => {
        Image.belongsTo(models.Experience,{
            as: 'image',
            foreignKey: 'idExperience'
        })
    }

    return Image
}