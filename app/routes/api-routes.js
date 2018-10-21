var Character = require("../models/character.js");
module.exports = function (app) {
  app.get("/api/:characters?", function (req, res) {
    // check if spaces for multiple words


    if (req.params.characters) {
      Character.findAll({
        where: {
          // Loop here


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
          }, {
            url: {
              $like: '%' + req.params.characters + '%'
            }
          }]
        },


        // End of loop
        order: [
          ['popularity', 'DESC']
        ],
        limit: 10
      }).then(function (result) {
        return res.json(result);
      });
    }
    else {
      Character.findAll({}).then(function (result) {
        return res.json(result);
      });
    }
  });

  app.post("/api/new", function (req, res) {
    var character = req.body;
    var title = character.name.replace(/\s+/g, "").toLowerCase();
    Character.create({
      title: title,
      url: character.url,
      metadata: character.metadata,
      type: character.type
    });
  });
};
