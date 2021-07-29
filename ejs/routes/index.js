const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();
const PORT = 3000;

// Set EJS as a Web Templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routing to views folder
app.get('/', routes);

app.listen(PORT, () => {
    console.log(`Server booming at http://localhost:${PORT}`);
});