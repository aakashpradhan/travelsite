const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust path as needed
const Package = require('../models/package');


// Define the Package model
const Package = sequelize.define('Package', {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false }
});




module.exports = Package;
