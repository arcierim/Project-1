const request = require('supertest');
const app = require('../../src/app');

describe('Book Routes', () => {
    it('POST /books should call createBookController', async () => {
        const response = await request(app)
            .post('/books')
            .send({ title: 'Test Book', author: 'Test Author', price: 10, sellerId: 1 });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('POST /books should return 400 if data is invalid', async () => {
        const response = await request(app)
            .post('/books')
            .send({ title: '', author: 'Test Author', price: 10, sellerId: 1 });

        expect(response.status).toBe(400);
    });

    // Similar tests for other routes
});
