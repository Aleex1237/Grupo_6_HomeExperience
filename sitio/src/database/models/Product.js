module.exports= (sequelize, dataTypes) => {

    let alias= "Product"

    let cols= {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(150),
            allowNull: false
        },
        idExperience:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
            }

    let config= {
        tableName: 'products',
        timeStamps: false
    }

    const Product= sequelize.define(alias,cols,config)

    Product.associate= models => {
        Product.belongsTo(models.Experience,{
            as: 'experience',
            foreignKey: 'idExperience'
        })
    }

    return Product
}