module.exports = (sequelize, dataTypes) => {

    let alias= "Experience"

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description:{
            type: dataTypes.TEXT,
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        active:{
            type: dataTypes.INTEGER(1),
            allowNull: false
        },
        idCategory:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
            }

    let config= {
        tableName: 'experiences',
        timestamps: false
    }

    const Experience= sequelize.define(alias,cols,config)

        Experience.associate= models => {

            Experience.belongsTo(models.Category,{
                as: 'category',
                foreignKey : 'idCategory'
            })

            Experience.belongsToMany(models.Keyword,{
                as : 'keywords',
                through : 'KeywordExperience',
                foreignKey : 'idExperience',
                otherKey : 'idKeywords'
            }),

                Experience.hasMany(models.Image,{
                    as: 'images',
                    foreignKey: 'idExperience'
                })
         
                Experience.hasMany(models.Product,{
                    as: 'products',
                    foreignKey: 'idExperience'
                })
            }
                return Experience
    }

    
