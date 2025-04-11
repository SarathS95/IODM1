const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;
class Comments extends Model { }

// Sequelize
Comments.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: 
       true, primaryKey: true
           },
        Comments: {
        type: DataTypes.STRING, allowNull: false
           },
           UserId: {
            type: DataTypes.INTEGER, allowNull: false, unique: false
            },
            PostId: {
                type: DataTypes.INTEGER, allowNull: false, unique: false
                   },
        
        
},

{
    sequelize: sequelizeInstance, modelName: 'comments', // use lowercase plural format
    timestamps: true, freezeTableName: true
       }
)
    module.exports = Comments;