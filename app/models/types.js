module.exports = function(sequelize, DataTypes) {
    var Types = sequelize.define("Types", {
      // Giving the Author model a name of type STRING
      type: DataTypes.STRING
    });
  
    Types.associate = function(models) {
        Types.hasMany(models.Links, {
            onDelete: "cascade"
        });
    };

    return Types;
  };





//   module.exports = function(sequelize, DataTypes) {
//     var Author = sequelize.define("Author", {
//       // Giving the Author model a name of type STRING
//       name: DataTypes.STRING
//     });
  
//     Author.associate = function(models) {
//       // Associating Author with Posts
//       // When an Author is deleted, also delete any associated Posts
//       Author.hasMany(models.Post, {
//         onDelete: "cascade"
//       });
//     };
  
//     return Author;
//   };
  