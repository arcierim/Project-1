const request = require('supertest');
const app = require('../../src/app');

describe('Order E2E', () => {
    it('should handle order lifecycle', async () => {
        // Create order
        const createOrderResponse = await request(app)
            .post('/orders')
            .send({ bookId: 1, buyerId: 1 });

        expect(createOrderResponse.status).toBe(201);
        const orderId = createOrderResponse.body.id;

        // Update order
        const updateOrderResponse = await request(app)
            .put(`/orders/${orderId}`)
            .send({ bookId: 2 });

        expect(updateOrderResponse.status).toBe(200);

        // Get order
        const getOrderResponse = await request(app)
            .get(`/orders/${orderId}`);

        expect(getOrderResponse.status).toBe(200);
        expect(getOrderResponse.body).toHaveProperty('bookId', 2);

        // Delete order
        const deleteOrderResponse = await request(app)
            .delete(`/orders/${orderId}`);

        expect(deleteOrderResponse.status).toBe(204);

        // Try to get deleted order
        const getDeletedOrderResponse = await request(app)
            .get(`/orders/${orderId}`);

        expect(getDeletedOrderResponse.status).toBe(404);
    });
});
