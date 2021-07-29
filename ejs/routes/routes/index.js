const express = require('express');
const router = express.Router();

// Index Page
app.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Title Text Example',
        exampleMessage: 'This is index express ejs page'
    });
});

// About Page
app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About',
        exampleMessage: 'This is about express ejs page'
    });
});

// Portfolio
app.get('/portfolio', (req, res) => {
    res.render('pages/portfolio', {
        title: 'Portfolio',
        exampleMessage: 'This is portfolio express ejs page'
    });
});

// Contact Page
app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact',
        exampleMessage: 'This is contact express ejs page'
    });
});

module.exports = router;