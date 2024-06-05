const { createOrder, getOrderById, updateOrder, deleteOrder } = require('../Actions/orderActions');

function createOrderController(req, res) {
    try {
        const order = createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

function getOrderController(req, res) {
    const order = getOrderById(parseInt(req.params.id, 10));
    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404).json({ error: 'Order not found' });
    }
}

function updateOrderController(req, res) {
    try {
        const order = updateOrder(parseInt(req.params.id, 10), req.body);
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

function deleteOrderController(req, res) {
    try {
        deleteOrder(parseInt(req.params.id, 10));
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = { createOrderController, getOrderController, updateOrderController, deleteOrderController };
