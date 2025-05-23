const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");
const User = require("./user")
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model { }

// Sequelize
Post.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: 
       true, primaryKey: true
           },
        PostDescription: {
        type: DataTypes.STRING, allowNull: false
           },
        PostImage: {
        type: DataTypes.STRING, allowNull: false
           },
        UserId: {
        type: DataTypes.INTEGER, allowNull: false, references: {
         model: User,
         key: "id",
         indexes:[{unique:true}]
      }
   },
        
},

{
    sequelize: sequelizeInstance, modelName: 'post', // use lowercase plural format
    timestamps: true, freezeTableName: true
       }
)
    module.exports = Post;