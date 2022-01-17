const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json');
const db = {};

db.connection = new Sequelize(config.development.database,
    config.development.username,
    config.development.password,
    config.development);

// The models are linked to the DB

db.User = require('../models/user')(db.connection, DataTypes);
// db.Address = require('../models/Address')(db.connection, DataTypes);

module.exports = db;