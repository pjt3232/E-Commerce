//uses dotenv npm package to configurate a protected mysql login
require('dotenv').config();

//grabs npm package Sequelize
const Sequelize = require('sequelize');

//Creates connection to sequelize 
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;