const request = require('supertest');
const app = require('../../src/app');

describe('Order Routes', () => {
    it('POST /orders should call createOrderController', async () => {
        const response = await request(app)
            .post('/orders')
            .send({ bookId: 1, buyerId: 1 });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('POST /orders should return 400 if data is invalid', async () => {
        const response = await request(app)
            .post('/orders')
            .send({ bookId: '', buyerId: 1 });

        expect(response.status).toBe(400);
    });

    // Similar tests for other routes
});
