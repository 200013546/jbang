require("dotenv");
require('dotenv').config()

console.log('this is loaded');

var DB = {
    host: process.env.jbangDB_Host,
    username: process.env.jbangDB_Username,
    password: process.env.jbangDB_Password,
    port: process.env.jbangDB_Port,
    database: process.env.jbangDB_Database,
}

module.exports = {
  
    DB,

  }