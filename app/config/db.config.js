const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.child = require('../model/child.model.js')(sequelize,Sequelize);
db.vaccine = require('../model/vaccine.model.js')(sequelize, Sequelize);
db.vaccineHistory = require('../model/vaccine-history.model.js')(sequelize, Sequelize);

module.exports = db;