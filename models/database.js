const mongoose = require('mongoose');

mongoose.connect('http://localhost:27017/NodeJS_crud', { useNewUrlParser : true}, (err) => {
    if(!err)
        console.log("MongoDB Connected");
    else
        console.log("MongoDB Failed to Connect");
})

require('./user.model');