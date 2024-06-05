const { createUserController, getUserController, updateUserController, deleteUserController } = require('../../src/controllers/userController');
const { mockRequest, mockResponse } = require('../utils/interceptor');

describe('User Controller', () => {
    it('should return 201 and created user', async () => {
        const req = mockRequest({ body: { name: 'John Doe', email: 'john@example.com' } });
        const res = mockResponse();

        await createUserController(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ id: expect.any(Number) }));
    });

    it('should return 400 if data is invalid on create', async () => {
        const req = mockRequest({ body: { name: '', email: 'invalid' } });
        const res = mockResponse();

        await createUserController(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
    });

    it('should return 200 and the user', async () => {
        const req = mockRequest({ params: { id: 1 } });
        const res = mockResponse();

        await getUserController(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('should return 404 if user not found', async () => {
        const req = mockRequest({ params: { id: 99 } });
        const res = mockResponse();

        await getUserController(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
    });

    // Similar tests for updateUserController, deleteUserController
});
