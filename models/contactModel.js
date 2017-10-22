var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    name: String,
    phone: String,
    email: String
});

var contactModel = new Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },    
    contacts: [User]    
});

module.exports = mongoose.model('Contact', contactModel);