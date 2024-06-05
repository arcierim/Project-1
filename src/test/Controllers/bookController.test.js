const { createBookController, getBookController, updateBookController, deleteBookController } = require('../../src/controllers/bookController');
const { mockRequest, mockResponse } = require('../utils/interceptor');

describe('Book Controller', () => {
    it('should return 201 and created book', async () => {
        const req = mockRequest({ body: { title: 'Test Book', author: 'Test Author', price: 10, sellerId: 1 } });
        const res = mockResponse();

        await createBookController(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ id: expect.any(Number) }));
    });

    it('should return 400 if data is invalid on create', async () => {
        const req = mockRequest({ body: { title: '', author: 'Test Author', price: 10, sellerId: 1 } });
        const res = mockResponse();

        await createBookController(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
    });

    it('should return 200 and the book', async () => {
        const req = mockRequest({ params: { id: 1 } });
        const res = mockResponse();

        await getBookController(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('should return 404 if book not found', async () => {
        const req = mockRequest({ params: { id: 99 } });
        const res = mockResponse();

        await getBookController(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
    });

    // Similar tests for updateBookController, deleteBookController
});
