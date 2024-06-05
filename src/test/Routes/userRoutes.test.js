const request = require('supertest');
const app = require('../../src/app');

describe('User Routes', () => {
    it('POST /users should call createUserController', async () => {
        const response = await request(app)
            .post('/users')
            .send({ name: 'John Doe', email: 'john@example.com' });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('POST /users should return 400 if data is invalid', async () => {
        const response = await request(app)
            .post('/users')
            .send({ name: '', email: 'invalid' });

        expect(response.status).toBe(400);
    });

    // Similar tests for other routes
});
