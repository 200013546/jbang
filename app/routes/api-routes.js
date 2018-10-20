// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../models/character.js");

// Routes
// =============================================================
module.exports = function (app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function (req, res) {
    // If the user provides a specific character in the URL...
    if (req.params.characters) {
      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Character.findAll({
        where: {
          $or: [{
            title: {
              $like: '%' + req.params.characters + '%'
            }
          }, {
            metadata: {
              $like: '%' + req.params.characters + '%'
            }
          }, {
            type: {
              $like: '%' + req.params.characters + '%'
            }
          }]
        },
        order: [
          ['popularity', 'DESC']
        ],
        limit: 10
      }).then(function (result) {
        return res.json(result);
      });
    }
    else {
      // Otherwise...
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
      Character.findAll({}).then(function (result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", function (req, res) {
    // Take the request...
    var character = req.body;

    // Create a title

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var title = character.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Character.create({
      title: title,
      url: character.url,
      metadata: character.metadata,
      type: character.type
    });
  });
};
