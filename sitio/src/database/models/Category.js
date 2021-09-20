module.exports = (sequelize, dataTypes)=>{
    const alias = "Category";
    const cols = {
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER.UNSIGNED,
            allowNull:false
        },
        name:{
            type:dataTypes.STRING,
            allowNull:fal
        }

    };
    const config = {
        tableName: "categories",
        timestamps:false
    }
    const Category = sequelize.define(alias, cols, config);
    Category.associate= function(models){
        Category.hasMany(models.Experience,{
            as:"experiences",
            foreignKey: "idExperience"
        })

    };
    return Category;
}