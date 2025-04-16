const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");
const User = require("./user")
const Post = require("./post")

const sequelizeInstance = dbConnect.Sequelize;
class Like extends Model { }

// Sequelize
Like.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: 
       true, primaryKey: true
           },
       UserId: {
            type: DataTypes.INTEGER, allowNull: true,  references: {
                model: User,
                key: "id",
                indexes:[{unique:true}]
             }
            },
        PostId: {
                type: DataTypes.INTEGER, allowNull: true,  references: {
                    model: Post,
                    key: "id",
                    indexes:[{unique:true}]
                 }
                   },
        
        
},

{
    sequelize: sequelizeInstance, modelName: 'like', // use lowercase plural format
    timestamps: true, freezeTableName: true
       }
)
    module.exports = Like;