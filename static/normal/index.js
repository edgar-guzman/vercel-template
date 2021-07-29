const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set EJS as a Web Templating
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Title Text Example',
        exampleMessage: 'This is index express ejs page'
    });
});

app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About',
        exampleMessage: 'This is about express ejs page'
    });
});

app.get('/portfolio', (req, res) => {
    res.render('pages/portfolio', {
        title: 'Portfolio',
        exampleMessage: 'This is portfolio express ejs page'
    });
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact',
        exampleMessage: 'This is contact express ejs page'
    });
});

app.listen(PORT, () => {
    console.log(`Server booming at http://localhost:${PORT}`);
});