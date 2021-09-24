module.exports = (sequelize, dataTypes)=>{
    const alias = "Category";
    const cols = {
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER,
            allowNull:false
        },
        name:{
            type:dataTypes.STRING,
            allowNull:false
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
            foreignKey: "idCategory"
        })

    };
    return Category;
}