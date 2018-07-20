const Sequelize = require('sequelize');

const sequelize =new Sequelize('elito-user-api-db','root','',{
    host:'localhost',
    dialect: 'mysql',
});

sequelize.authenticate().then(function(){
    console.log("CONNECTED!");
})
.catch(function(err){
    console.log(err);
})
.done();

module.exports = sequelize;