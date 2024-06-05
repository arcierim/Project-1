const request = require('supertest');
const app = require('../../src/app');

describe('User Integration', () => {
    it('should create a user and retrieve it by ID', async () => {
        const userResponse = await request(app)
            .post('/users')
            .send({ name: 'John Doe', email: 'john@example.com' });

        const userId = userResponse.body.id;

        const getUserResponse = await request(app)
            .get(`/users/${userId}`);

        expect(getUserResponse.status).toBe(200);
        expect(getUserResponse.body).toHaveProperty('name', 'John Doe');
    });
});
