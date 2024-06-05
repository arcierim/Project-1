const request = require('supertest');
const app = require('../../src/app');

describe('Book E2E', () => {
    it('should handle book lifecycle', async () => {
        // Create book
        const createBookResponse = await request(app)
            .post('/books')
            .send({ title: 'Test Book', author: 'Test Author', price: 10, sellerId: 1 });

        expect(createBookResponse.status).toBe(201);
        const bookId = createBookResponse.body.id;

        // Update book
        const updateBookResponse = await request(app)
            .put(`/books/${bookId}`)
            .send({ title: 'Updated Book' });

        expect(updateBookResponse.status).toBe(200);

        // Get book
        const getBookResponse = await request(app)
            .get(`/books/${bookId}`);

        expect(getBookResponse.status).toBe(200);
        expect(getBookResponse.body).toHaveProperty('title', 'Updated Book');

        // Delete book
        const deleteBookResponse = await request(app)
            .delete(`/books/${bookId}`);

        expect(deleteBookResponse.status).toBe(204);

        // Try to get deleted book
        const getDeletedBookResponse = await request(app)
            .get(`/books/${bookId}`);

        expect(getDeletedBookResponse.status).toBe(404);
    });
});
