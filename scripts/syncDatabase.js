const sequelize = require('../config/database');
const Package = require('../models/package');

(async () => {
    try {
        // Sync all defined models to the database
        await sequelize.sync({ force: true }); // Use { force: true } to drop and recreate tables
        console.log('Database synced successfully.');

        // Optional: Insert initial data
        await Package.bulkCreate([
            { name: "Kashmir Delight", price: "$500", description: "A 5-day tour package covering major attractions in Kashmir.", image: "/images/package1.jpg" },
            { name: "Heaven on Earth", price: "$800", description: "A 7-day luxury tour package with houseboat stays and more.", image: "/images/package2.jpg" }
        ]);

        console.log('Initial data inserted.');
    } catch (error) {
        console.error('Error syncing database:', error);
    } finally {
        await sequelize.close();
    }
})();
