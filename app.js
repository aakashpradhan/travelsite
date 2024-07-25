const express = require('express');
const path = require('path');
const sequelize = require('./config/database'); // Adjust path if necessary
const indexRoutes = require('./routes/index'); // Adjust path if necessary
const packagesRoutes = require('./routes/packages'); // Adjust path if necessary


const app = express();
const port = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', indexRoutes);
app.use('/packages', packagesRoutes);

// Start server
app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
