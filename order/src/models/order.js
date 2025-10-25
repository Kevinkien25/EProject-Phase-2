const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    // Store a snapshot of the products in the order (avoid relying on product collection state)
    products: [{
        _id: { type: mongoose.Schema.Types.ObjectId },
        name: { type: String, required: true },
        price: { type: Number, required: true, min: 0 },
        description: { type: String }
    }],
    // Plaintext username of the user who placed the order
    user: {
        type: String,
        required: false,
    },
    // Order status (e.g., 'completed')
    status: {
        type: String,
        default: 'completed',
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'orders' });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;