const express = require('express');
const { createOrderController, getOrderController, updateOrderController, deleteOrderController } = require('../controllers/orderController');

const router = express.Router();

router.post('/', createOrderController);
router.get('/:id', getOrderController);
router.put('/:id', updateOrderController);
router.delete('/:id', deleteOrderController);

module.exports = router;
