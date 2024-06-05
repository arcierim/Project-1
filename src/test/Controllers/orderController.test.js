const { createOrderController, getOrderController, updateOrderController, deleteOrderController } = require('../../src/controllers/orderController');
const { mockRequest, mockResponse } = require('../utils/interceptor');

describe('Order Controller', () => {
    it('should return 201 and created order', async () => {
        const req = mockRequest({ body: { bookId: 1, buyerId: 1 } });
        const res = mockResponse();

        await createOrderController(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ id: expect.any(Number) }));
    });

    it('should return 400 if data is invalid on create', async () => {
        const req = mockRequest({ body: { bookId: '', buyerId: 1 } });
        const res = mockResponse();

        await createOrderController(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
    });

    it('should return 200 and the order', async () => {
        const req = mockRequest({ params: { id: 1 } });
        const res = mockResponse();

        await getOrderController(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
    });

    it('should return 404 if order not found', async () => {
        const req = mockRequest({ params: { id: 99 } });
        const res = mockResponse();

        await getOrderController(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
    });

    // Similar tests for updateOrderController, deleteOrderController
});
