const { createOrder, getOrderById, updateOrder, deleteOrder } = require('../../src/actions/orderActions');

describe('Order Actions', () => {
    it('should create an order', () => {
        const order = createOrder({ bookId: 1, buyerId: 1 });
        expect(order).toHaveProperty('id');
    });

    it('should throw error if data is invalid on order creation', () => {
        expect(() => createOrder({ bookId: '', buyerId: 1 })).toThrow();
    });

    it('should get an order by id', () => {
        const order = createOrder({ bookId: 1, buyerId: 1 });
        const fetchedOrder = getOrderById(order.id);
        expect(fetchedOrder).toEqual(order);
    });

    it('should update an order', () => {
        const order = createOrder({ bookId: 1, buyerId: 1 });
        const updatedOrder = updateOrder(order.id, { bookId: 2 });
        expect(updatedOrder.bookId).toBe(2);
    });

    it('should delete an order', () => {
        const order = createOrder({ bookId: 1, buyerId: 1 });
        deleteOrder(order.id);
        expect(() => getOrderById(order.id)).toThrow('Order not found');
    });
});
