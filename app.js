const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Load packages data
const packages = require('./data/packages.json');

// Route to get packages data
app.get('/api/packages', (req, res) => {
    res.json(packages);
});

// Route to handle booking (for simplicity, just logging the booking data)
app.post('/api/book', (req, res) => {
    const booking = req.body;
    console.log('Booking received:', booking);
    res.status(200).json({ message: 'Booking successful!' });
});

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});


// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
