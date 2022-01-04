const mongoose = require('mongoose');

//Create Menu Schema & model 
const menuSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true 
    },
    price: {
        type: Number,
        require: true
    },
    size: {
        type: String, 
        required: true 
    },
    information: {
        type: String, 
        required: true
    },
    story: {
        type: String, 
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Menu', menuSchema);