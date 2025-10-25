const Product = require("../models/product");
const uuid = require('uuid');
const axios = require('axios');

/**
 * Class to hold the API implementation for the product services
 */
class ProductController {

    constructor() {
        this.createOrder = this.createOrder.bind(this);
        this.getOrderStatus = this.getOrderStatus.bind(this);
        this.ordersMap = new Map();
        this.ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL || 'http://localhost:3002';
    }

    async createProduct(req, res, next) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            const product = new Product(req.body);

            const validationError = product.validateSync();
            if (validationError) {
                return res.status(400).json({ message: validationError.message });
            }

            await product.save({ timeout: 30000 });

            res.status(201).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    }

    async createOrder(req, res, next) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            const { ids } = req.body;
            const products = await Product.find({ _id: { $in: ids } });

            if (!products || products.length === 0) {
                return res.status(404).json({ message: "No products found" });
            }

            const orderId = uuid.v4();
            const orderData = {
                orderId,
                products,
                username: req.user.username,
                totalPrice: products.reduce((acc, product) => acc + product.price, 0)
            };

            // Make direct HTTP call to Order service
            const response = await axios.post(`${this.ORDER_SERVICE_URL}/api/orders`, orderData, {
                headers: {
                    'Authorization': token
                }
            });

            return res.status(201).json(response.data);
        } catch (error) {
            console.error(error);
            if (error.response) {
                return res.status(error.response.status).json(error.response.data);
            }
            res.status(500).json({ message: "Server error" });
        }
    }


    async getOrderStatus(req, res, next) {
        const { orderId } = req.params;
        const order = this.ordersMap.get(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.status(200).json(order);
    }

    async getProducts(req, res, next) {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            const products = await Product.find({});

            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    }


}

module.exports = ProductController;