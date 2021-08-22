const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27020/?readPreference=primary&appname=MongoDB%20Compass&ssl=false', { useNewUrlParser : true}, (err) => {
    if(!err)
        console.log("MongoDB Connected");
    else
        console.log("MongoDB Failed to Connect");
})

require('./user.model');