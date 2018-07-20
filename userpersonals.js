const Sequelize = require('sequelize');

module.exports = function(sequelize){

   return sequelize.define('userpersonal',{
    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    uuid: {type: Sequelize.STRING, allowNull: false},
    userName: {type: Sequelize.STRING(30), allowNull: false},
    firstName: {type: Sequelize.STRING(20), allowNull: false},
    lastName: {type: Sequelize.STRING(20), allowNull: false},
    regNumber: {type: Sequelize.STRING(9), allowNull: false},
    dob: {type: Sequelize.DATE, allowNull: false},
    gender: {type: Sequelize.STRING(11), allowNull: false},
    mobileNumber: {type: Sequelize.STRING(10), allowNull: true},
    userBio: {type: Sequelize.STRING(800), allowNull: false},
},{ timestamps: false});
}