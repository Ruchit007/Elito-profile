const restify = require('restify');
var Sequelize = require('sequelize');
const server = restify.createServer({
    name: 'Ruchit',
    version: '1.0.0'
});

var sequelize = require('./dbconnection');


server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

require('./routes')(sequelize,server);

server.listen(7777, function() {
    console.log(`listening At ${server.name} ${server.url}`);
});