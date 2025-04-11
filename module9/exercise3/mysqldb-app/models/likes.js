const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;
class Likes extends Model { }

// Sequelize
Likes.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: 
       true, primaryKey: true
           },
       UserId: {
            type: DataTypes.INTEGER, allowNull: true, unique: true
            },
        PostId: {
                type: DataTypes.INTEGER, allowNull: true, unique: true
                   },
        
        
},

{
    sequelize: sequelizeInstance, modelName: 'likes', // use lowercase plural format
    timestamps: true, freezeTableName: true
       }
)
    module.exports = Likes;