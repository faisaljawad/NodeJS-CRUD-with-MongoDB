const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "name" : {
        type: String
    },
    "email": {
        type: String
    },
    "mobile": {
        type: String
    }
});

mongoose.model('User', userSchema);