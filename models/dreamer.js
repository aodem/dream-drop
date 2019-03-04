module.exports = function(sequelize, DataTypes) {
    var Dreamer = sequelize.define("Dreamer", {
      // Giving the dreamer model a name of type STRING
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
      // Associating dreamer with Posts
      // When an dreamer is deleted, also delete any associated Posts
      Dreamer.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Dreamer;
  };
  