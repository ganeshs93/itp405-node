var Sequelize = require('sequelize');
var db = require('./../config/sequelize');

var Dvd = db.define('dvd', {
    title: {
        field: 'title',
        type: Sequelize.STRING
    }, award: {
        field: 'award', 
        type: Sequelize.STRING
    }
    }, {timestamps: false});

module.exports = Dvd;