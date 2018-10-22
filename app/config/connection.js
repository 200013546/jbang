// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
require("dotenv");
require("dotenv").config();
var Sequelize = require("sequelize");
var keys = require("./keys");
var jbangDB = keys.DB;


// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize(jbangDB.database, jbangDB.username, jbangDB.password, {
  host: jbangDB.host,
  port: jbangDB.port,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// console.log("this is the array" + sequelize)

// Exports the connection for other files to use
module.exports = sequelize;