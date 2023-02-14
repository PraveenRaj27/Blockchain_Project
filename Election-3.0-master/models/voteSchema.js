const mongoose = require ('mongoose');

const blockchainSchema = new mongoose.Schema({
    blockchain :{
        type: String,
    },
    id:{
        type: String,
    } 
});

module.exports = mongoose.model('blockchainSchema', blockchainSchema);