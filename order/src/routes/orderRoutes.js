const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const isAuthenticated = require('../utils/isAuthenticated');

const orderController = new OrderController();

router.post('/', isAuthenticated, orderController.createOrder);
router.get('/:orderId', isAuthenticated, orderController.getOrder);

module.exports = router;