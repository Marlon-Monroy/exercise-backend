const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const TokenSchema  = mongoose.Schema({
    token: {
        type:String,
    },
    code: {
        type:String,
    }
});

module.exports = mongoose.model('token', TokenSchema);