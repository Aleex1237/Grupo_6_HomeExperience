const sequelize = require("sequelize");
module.exports = (sequelize, dataTypes)=>{
    const alias = "Cart_detail";
    const cols = {
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER,
            allowNull:false
        },
        cantidad:{
            type:dataTypes.INTEGER,
            allowNull:false
        },
        idExperience:{
            type:dataTypes.INTEGER,
            allowNull:false
        },
        idCart:{
            type:dataTypes.INTEGER,
            allowNull:false
        },
        statusCart: {
            type: dataTypes.STRING,
            allowNull: true,
          },
        idUser:{
            type:dataTypes.INTEGER,
            allowNull:false
        }

    };
    const config = {
        tableName: "cart_detail",
        timestamps:false
    }
    const Cart_detail = sequelize.define(alias, cols, config);
    
    Cart_detail.associate= models => {

        Cart_detail.belongsTo(models.Experience,{
            as: 'experience',
            foreignKey : 'idExperience'
        })

        Cart_detail.belongsTo(models.Cart,{
            as: 'cart',
            foreignKey: 'idCart'
        })
    
        Cart_detail.belongsTo(models.User,{
            as: 'user',
            foreignKey: 'idUser'
        })
        }

    return Cart_detail;
}