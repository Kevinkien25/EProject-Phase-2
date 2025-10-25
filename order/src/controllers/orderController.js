const Order = require('../models/order');

class OrderController {
    async createOrder(req, res) {
        try {
            const { orderId, products, totalPrice } = req.body;
            const username = req.user.username; // Get username from JWT token

            const newOrder = new Order({
                orderId,
                products,
                user: username,
                // ensure status is set (model has default but set explicitly to be clear)
                status: 'completed',
                totalPrice
            });

            await newOrder.save();

            // Return a formatted response with the requested key order
            const response = {
                status: newOrder.status || 'completed',
                products: newOrder.products,
                totalPrice: newOrder.totalPrice,
                username: newOrder.user || username,
                _id: newOrder._id,
                createdAt: newOrder.createdAt
            };

            res.status(201).json(response);
        } catch (error) {
            console.error('Error creating order:', error);
            res.status(500).json({ message: 'Error creating order' });
        }
    }

    async getOrder(req, res) {
        try {
            const { orderId } = req.params;
            const order = await Order.findOne({ orderId });

            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }

            // Build a response object to ensure status appears before products
            const response = {
                status: order.status || 'completed',
                products: order.products,
                totalPrice: order.totalPrice,
                username: order.user || null,
                _id: order._id,
                createdAt: order.createdAt
            };

            res.status(200).json(response);
        } catch (error) {
            console.error('Error getting order:', error);
            res.status(500).json({ message: 'Error getting order' });
        }
    }
}

module.exports = OrderController;