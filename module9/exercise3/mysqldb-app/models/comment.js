const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");
const User = require("./user");
const Post = require("./post")

const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model { }

// Sequelize
Comment.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: 
       true, primaryKey: true
           },
        Comment: {
        type: DataTypes.STRING, allowNull: false
           },
           UserId: {
            type: DataTypes.INTEGER, allowNull: false,  references: {
                model: User,
                key: "id",
                indexes:[{unique:true}]
             }
            },
            PostId: {
                type: DataTypes.INTEGER, allowNull: false,  references: {
                    model: Post,
                    key: "id",
                    indexes:[{unique:true}]
                 }
                   },
        
        
},

{
    sequelize: sequelizeInstance, modelName: 'comment', // use lowercase plural format
    timestamps: true, freezeTableName: true
       }
)
    module.exports = Comment;