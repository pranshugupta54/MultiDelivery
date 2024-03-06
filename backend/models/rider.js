const mongoose = require('mongoose');

const riderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    vacant: {
        type: Boolean,
        default: true
    }
});

const Rider = mongoose.model('Rider', riderSchema);

module.exports = Rider;