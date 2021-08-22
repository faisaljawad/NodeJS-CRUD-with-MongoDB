require('./models/database');

const express = require('express');
var app = express();

app.listen(300, () => {
    console.log("Server started at port : 3000");
})