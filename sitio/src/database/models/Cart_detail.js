const sequelize = require("sequelize");
module.exports = (sequelize, dataTypes)=>{
    const alias = "Cart-detail";
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
    Cart_detail.associate= function(models){
        Cart_detail.belongsTo(models.experiences,{
            as:"experience",
            foreingKey:"idExperience"
        }),
        Cart_detail.belongsTo(models.users,{
            as:"user",
            foreingKey:"idUser"
        }),
        Cart_detail.belongsTo(models.cart,{
            as:"cart",
            foreingKey:"idCart"
        })

    };
    return Cart_detail;
}