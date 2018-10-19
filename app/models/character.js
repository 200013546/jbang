// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Character = sequelize.define("links", {
  // the routeName gets saved as a string
  title: Sequelize.STRING,
  // the name of the character (a string)
  url: Sequelize.STRING,
  // the character's role (a string)
  metadata: Sequelize.TEXT,
  // the character's age (a string)
  type: Sequelize.STRING
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
