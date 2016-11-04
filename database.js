// Import database library, http://docs.sequelizejs.com/en/v3/
var Sequelize = require('sequelize');
  // Get a connection to the database, need to have the DATABASE_URL
  // environment variable set.
  var sequelize = new Sequelize(process.env.DATABASE_URL);
  
  sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
  
module.exports = exports = sequelize;