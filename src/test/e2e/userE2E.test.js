const request = require('supertest');
const app = require('../../src/app');

describe('User E2E', () => {
    it('should handle user lifecycle', async () => {
        // Create user
        const createUserResponse = await request(app)
            .post('/users')
            .send({ name: 'John Doe', email: 'john@example.com' });

        expect(createUserResponse.status).toBe(201);
        const userId = createUserResponse.body.id;

        // Update user
        const updateUserResponse = await request(app)
            .put(`/users/${userId}`)
            .send({ name: 'John Smith' });

        expect(updateUserResponse.status).toBe(200);

        // Get user
        const getUserResponse = await request(app)
            .get(`/users/${userId}`);

        expect(getUserResponse.status).toBe(200);
        expect(getUserResponse.body).toHaveProperty('name', 'John Smith');

        // Delete user
        const deleteUserResponse = await request(app)
            .delete(`/users/${userId}`);

        expect(deleteUserResponse.status).toBe(204);

        // Try to get deleted user
        const getDeletedUserResponse = await request(app)
            .get(`/users/${userId}`);

        expect(getDeletedUserResponse.status).toBe(404);
    });
});
