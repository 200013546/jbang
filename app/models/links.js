var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
var Link = sequelize.define("links", {
  title: Sequelize.STRING,
  url: Sequelize.STRING,
  metadata: Sequelize.TEXT,
  typeid: Sequelize.STRING
});
Link.sync();
module.exports = Link;


// module.exports = function(sequelize, DataTypes) {
//   var Links = sequelize.define("Links", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     url: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       len:[1]
//     },
//     typeid: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       len:[1]
//     },
//     metadata: {
//       type: DataTypes.TEXT,
//       allowNull: true
//     },
//     typeid: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       len:[1]
//     }
//   });

//   Post.associate = function(models) {
//     // We're saying that a Post should belong to an Author
//     // A Post can't be created without an Author due to the foreign key constraint
//     Post.belongsTo(models.Author, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

//   return Post;
// };
