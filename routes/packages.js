const express = require('express');
const router = express.Router();
const Package = require('../models/package'); // Adjust path as needed
const path = require('path');
const multer = require('multer');


// Kashmir Tour Packages Page
router.get('/packages', async (req, res) => {
    try {
        const packages = await Package.findAll();
        res.render('pages/packages', { packages });
    } catch (error) {
        console.error('Error fetching packages:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Set up storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/'); // Folder to save uploaded files
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Serve the form
router.get('/add', (req, res) => {
    res.render('pages/add-package');
});

// Handle form submission
router.post('/add', upload.single('image'), async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : null;

        // Create a new package entry
        await Package.create({
            name,
            description,
            price,
            image
        });

        res.redirect('/packages');
    } catch (error) {
        console.error('Error adding package:', error);
        res.status(500).send('Error adding package');
    }
});


module.exports = router;
