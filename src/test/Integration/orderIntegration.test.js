const request = require('supertest');
const app = require('../../src/app');

describe('Order Integration', () => {
    it('should create an order and retrieve it by ID', async () => {
        const orderResponse = await request(app)
            .post('/orders')
            .send({ bookId: 1, buyerId: 1 });

        const orderId = orderResponse.body.id;

        const getOrderResponse = await request(app)
            .get(`/orders/${orderId}`);

        expect(getOrderResponse.status).toBe(200);
        expect(getOrderResponse.body).toHaveProperty('bookId', 1);
    });
});
