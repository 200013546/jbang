var Character = require("../models/character.js");
module.exports = function (app) {
  app.get("/api/:characters?", function (req, res) {
    // check if spaces for multiple words
    var reqChars = req.params.characters;
    var words = reqChars.split(" ");
    var andStatement = [];
    var orStatement = [];
    var titleStatement = [];
    var urlStatement = [];
    var mdStatement = [];
    var typeStatement = [];
    console.log(words);
    for (var i = 0; i < words.length; i++) {
      andStatement.push({
        title: {
          $like: '%' + words[i] + '%'
        }
      }
      )

      orStatement.push({
        title: {
          $like: '%' + words[i] + '%'
        }
      }, {
          url: {
            $like: '%' + words[i] + '%'
          }
        }, {
          metadata: {
            $like: '%' + words[i] + '%'
          }
      }, {
        type: {
          $like: '%' + words[i] + '%'
        }
      }
    )

      titleStatement.push({
        title: {
          $like: '%' + words[i] + '%'
        }
      }
      )

      urlStatement.push({
        url: {
          $like: '%' + words[i] + '%'
        }
      }
      )

      mdStatement.push({
        metadata: {
          $like: '%' + words[i] + '%'
        }
      }
      )

      typeStatement.push({
        type: {
          $like: '%' + words[i] + '%'
        }
      }
      )

    }

    console.log(orStatement);
    console.log(titleStatement);
    console.log(urlStatement);
    console.log(typeStatement);
    // console.log(orStatement);
    if (reqChars) {
      Character.findAll({
        where: {
          // $and: andStatement,
          $or: orStatement
          //titleStatement,
          //$or: urlStatement,
          //$or: typeStatement
        },



        order: [
          ['popularity', 'DESC']
        ],
        limit: 30
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
    // var title = character.title.replace(/\s+/g, "").toLowerCase();
    Character.create({
      title: character.title,
      url: character.url,
      metadata: character.metadata,
      type: character.type
    });
  });
};
