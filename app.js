//imports

const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// static file's path set up
app.use(express.static('public'));
app.use('/css', express.static(__dirname+'/public'));

const pages = path.join(__dirname, './views/pages');
const partials = path.join(__dirname, './views/partials');

// Set Views and view engine
app.set('views', pages);
app.set('view engine', 'ejs');
app.get('/', (req,res) =>{
    res.render('index')
});


// listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));