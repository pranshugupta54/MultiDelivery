const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    products: {
        type: Array,
        required: true
    },
    shopId: {
        type: String,
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },
    riderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rider',
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;