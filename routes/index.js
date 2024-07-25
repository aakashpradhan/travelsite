const express = require('express');
const router = express.Router();
const Package = require('../models/package'); // Adjust path as needed


// Home Page
router.get('/', async (req, res) => {
    try {
        const packages = await Package.findAll();
        res.render('pages/index', { packages });
    } catch (error) {
        console.error('Error fetching packages:', error);
        res.status(500).send('Internal Server Error');
    

router.get('about', (req, res)=>{
    res.render('pages/about');
});

router.get('/contact', (req, res)=>{
    res.render('/pages/contact');
});

router.get('/packages', (req, res)=>{
    res.render('/pages/packages');
});

const express = require('express');
const router = express.Router();
const Package = require('../models/package'); // Adjust path as needed

}
});

module.exports = router;
