module.exports = (sequelize, Sequelize) => {
	const Vaccine = sequelize.define('vaccine', 
	{
	  id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
	  name: {
		type: Sequelize.STRING
			}
	},
	{
		freezeTableName: true,
		timestamps: false
	});
    
	return Vaccine;
}