module.exports = function(sequelize, DataTypes) {
    var Dreamer = sequelize.define("Dreamer", {
      // Giving the Author model a name of type STRING
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          age: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          sex: {
            type: DataTypes.STRING,
            allowNull: false,
            }
        });
  
    Dreamer.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Dreamer.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Dreamer;
  };
  