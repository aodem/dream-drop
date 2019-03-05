module.exports = function (sequelize, DataTypes) {
	const Dreams = sequelize.define("Dreams", {
		dreamer_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dream_description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		mood: {
			type: DataTypes.STRING,
			allowNull: false
		},
		food: {
			type: DataTypes.STRING,
			allowNull: false
		},
		hours_of_sleep: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false
		},
		tv_on: {
			type: DataTypes.BOOLEAN,
			default: false,
			allowNull: false
		}
	});
	Dreams.associate = function (models) {
		// We're saying that a Post should belong to an dreamer
		// A Post can't be created without an dreamer due to the foreign key constraint
		Dreams.belongsTo(models.Dreamer, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Dreams;
};