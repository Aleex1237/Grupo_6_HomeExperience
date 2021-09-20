module.exports = (sequelize, dataTypes)=>{
    const alias = "Suscription";
    const cols = {
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:false
        },
        email:{
            type:dataTypes.STRING,
            allowNull:false
        },
        description:{
            type:dataTypes.TEXT,
            allowNull:true
        }

    };
    const config = {
        tableName: "susriptions",
        timestamps:false
    }
    const Suscription = sequelize.define(alias, cols, config);
    return Suscription;
}