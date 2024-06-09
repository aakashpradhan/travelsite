const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('pages/index');
})

app.get('/about', (req, res) => {
    res.render('pages/about');
})


// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
