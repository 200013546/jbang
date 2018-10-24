var Links = require("../models/links.js");
module.exports = function (app) {
  app.get("/api/:links?", function (req, res) {
    // check if spaces for multiple words
    var reqChars = req.params.links;
    if (reqChars) {
      var words = reqChars.split(" ");
      var titleStatement = [];
      var urlStatement = [];
      var mdStatement = [];
      var typeStatement = [];
      console.log(words);
      for (var i = 0; i < words.length; i++) {
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
          typeid: {
            $like: '%' + words[i] + '%'
          }
        }
        )
      }

      if (reqChars) {
        Links.findAll({
          where: {
            $or: [
              { $and: titleStatement },
              { $and: urlStatement },
              { $and: mdStatement },
              { $and: typeStatement }
            ]
          },
          order: [
            ['popularity', 'DESC']
          ],
          limit: 300
        }).then(function (result) {
          return res.json(result);
        });
      }
      else {
        Links.findAll({}).then(function (result) {
          return res.json(result);
        });
      }
    } else {
      return res.json(null);
    }
  });
  app.post("/api/new", function (req, res) {
    var Links = req.body;
    Links.create({
      title: link.title,
      url: link.url,
      metadata: link.metadata,
      typeid: link.typeid
    });
  });
};
