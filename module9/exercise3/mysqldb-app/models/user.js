const {DataTypes, Model} = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;
class User extends Model { }

// Sequelize
User.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: 
       true, primaryKey: true
           },
      emailId: {
            type: DataTypes.STRING, allowNull: false, unique: true
            },
      firstName: {
        type: DataTypes.STRING, allowNull: false
           },
      lastName: {
        type: DataTypes.STRING, allowNull: false
           },


},

{
    sequelize: sequelizeInstance, modelName: 'users', // use lowercase plural format
    timestamps: true, freezeTableName: true
       }
)
    module.exports = User;