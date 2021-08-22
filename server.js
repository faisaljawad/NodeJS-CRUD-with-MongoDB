require('./models/database');

const express = require('express');
var app = express();

const userController = require('./controllers/userController');

app.listen(3001, () => {
    console.log("Server started at port : 3001");
});

app.use('/user', userController);