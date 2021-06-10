const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//Import ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req,res) => {
    res.send('App is running');
});



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true }, 
() => console.log('connected to DB!')
);

//start listening to server
app.listen(3000);