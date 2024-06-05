const orders = [];

function createOrder(order) {
    if (!order.bookId || !order.buyerId) {
        throw new Error('Invalid data');
    }
    order.id = orders.length + 1;
    orders.push(order);
    return order;
}

function getOrderById(id) {
    return orders.find(order => order.id === id);
}

function updateOrder(id, data) {
    const order = getOrderById(id);
    if (!order) {
        throw new Error('Order not found');
    }
    Object.assign(order, data);
    return order;
}

function deleteOrder(id) {
    const index = orders.findIndex(order => order.id === id);
    if (index === -1) {
        throw new Error('Order not found');
    }
    orders.splice(index, 1);
}

module.exports = { createOrder, getOrderById, updateOrder, deleteOrder };
