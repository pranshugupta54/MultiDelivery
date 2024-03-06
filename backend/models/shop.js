const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Product',
        required: true
    }
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;