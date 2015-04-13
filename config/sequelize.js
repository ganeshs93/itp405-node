var Sequelize = require('sequelize');

var db = new Sequelize('dvd', 'student', 'ttrojan', {
        dialect: 'mysql',
        host: 'itp460.usc.edu'
    });

module.exports = db;