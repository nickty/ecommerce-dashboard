const express = require('express');
const router = express.Router();
const { getOrders, getOrder, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');
const auth = require('../middleware/auth');

router.get('/', auth, getOrders);
router.get('/:id', auth, getOrder);
router.post('/', auth, createOrder);
router.put('/:id', auth, updateOrder);
router.delete('/:id', auth, deleteOrder);

module.exports = router;

