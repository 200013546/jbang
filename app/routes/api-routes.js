var Character = require("../models/character.js");
module.exports = function (app) {
  app.get("/api/:characters?", function (req, res) {
    // check if spaces for multiple words
    var reqChars = req.params.characters;
    var words = reqChars.split(" ");
    console.log(words);

    if (reqChars) {
      Character.findAll({
        where: {
          // Loop here


          $or: [{
            title: {
              $like: '%' + reqChars + '%'
              // $Like: { $any: words}
              // $like: { $any: ['power', 'api']}
            }
          }, {
            metadata: {
              $like: '%' + reqChars + '%'
              // $Like: { $any: words}
              // $like: { $any: ['power', 'api']}
            }
          }, {
            type: {
              $like: '%' + reqChars + '%'
              //$Like: { $any: words}
              // $like: { $any: ['power', 'api']}
            }
          }, {
            url: {
              $like: '%' + reqChars + '%'
              // $Like: { $any: words}
              // $like: { $any: ['power', 'api']}
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
