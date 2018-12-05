module.exports = (sequelize, Sequelize) => {
   const VaccineHistory = sequelize.define('vaccine_history', {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      date: {
         type: Sequelize.DATE
      },
      weight: {
         type: Sequelize.FLOAT
      },
      height: {
         type: Sequelize.FLOAT
      },
      comment: {
         type: Sequelize.STRING
      },
      id_vaccine: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         references: {
            model: 'Vaccine',
            key: 'id'
         }
      },
      id_child: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         references: {
            model: 'Child',
            key: 'id'
         }
      }
   },
      {
         freezeTableName: true,
         timestamps: false,
      });

   VaccineHistory.associate = (models) => {
      VaccineHistory.belongsTo(models.Vaccine, {
         foreignKey: 'id_vaccine'
      });
      VaccineHistory.belongsTo(models.Child, {
         foreignKey: 'id_child'
      });
   };

   return VaccineHistory;
}

