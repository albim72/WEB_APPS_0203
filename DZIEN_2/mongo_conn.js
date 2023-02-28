var mongo = require("mongodb"),
    dbHost = '127.0.0.1',
    dbPort = 27017;

var Db = mongo.Db;
var Connection = mongo.Connection;
var Server = mongo.Server;
var db = new Db('local',new Server(dbHost,dbPort),{safe:true});

db.open(function (error,dbConnection){
    if(error){
        console.error(error);
        process.exit(1);
    }
    console.log('stan bazy danych:',db._state);
})

