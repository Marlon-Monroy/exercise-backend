const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const TokenSchema  = new Schema({
    token: {
        type:String,
    },
    code: {
        type:String,
    }
});

module.exports = mongoose.model('Token', TokenSchema);