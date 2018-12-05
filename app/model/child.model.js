module.exports = (sequelize, Sequelize) => {
	const Child = sequelize.define('child', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING
		},
		date_birth: {
			type: Sequelize.DATE
		},
		mother_name: {
			type: Sequelize.STRING
		},
		father_name: {
			type: Sequelize.STRING
		},
		photo: {
			type: Sequelize.BLOB
		}
	},
		{
			freezeTableName: true,
			timestamps: false
		});

	return Child;
}