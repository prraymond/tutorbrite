// Import database library, http://docs.sequelizejs.com/en/v3/
var Sequelize = require('sequelize');
  // Get a connection to the database, need to have the DATABASE_URL
  // environment variable set.
  if (process.env.JAWSDB_URL) {
    var sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    var sequelize = new Sequelize(process.env.DATABASE_URL, process.env.C9_USER);
  }
  
  sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
  
module.exports = exports = sequelize;