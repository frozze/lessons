const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path =require('path');
const db = require('./utils/database');


db.execute('SELECT * FROM USERS')
    .then(result=>console.log(result[0][1].usern,
                         result[0][1].passw))
    .catch(err=>console.log(err));

app.set('view engine', 'ejs');
app.set('views', 'views');

const routeAdmin = require('./routes/admin');
const puzzleStart = require('./routes/puzzle.js');



app.use(bodyParser.urlencoded({extended:false}));


// Middleware - this one is performed for each url
app.use((req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.query);
    console.log(req.body);
    next();
})


app.use(express.static('public'));
app.use(puzzleStart);
app.use(routeAdmin);

app.use((req, res, next)=> {

});


    
app.listen(8011,()=>{
    console.log('I am the puzzle server on the port 8011');
})