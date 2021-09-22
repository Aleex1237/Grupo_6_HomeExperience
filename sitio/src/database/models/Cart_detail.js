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
    
    return Cart_detail;
}