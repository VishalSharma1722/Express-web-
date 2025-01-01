const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

// public static path
const staticpath = path.join(__dirname, '../public');


const viewsPath = path.join(__dirname, '../templates/views');
app.set('views', viewsPath);
app.set('view engine', 'hbs');

// partials path
const partialsPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialsPath);

// middleware for static path
app.use(express.static(staticpath));


// routing
app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.render('index');
});

app.get('/about', (req, res) => {
    // res.send('Hello World about!');
    res.render('about');
});

app.get('/weather', (req, res) => {
    //res.send('Hello World My Weather!');
    res.render('weather');
});

app.get('*', (req, res) => {
    //res.send('404 Page not found');
    res.render('404error', {
        errorMsg: 'Opps! Page Not Found'
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});