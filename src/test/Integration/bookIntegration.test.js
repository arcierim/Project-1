const request = require('supertest');
const app = require('../../src/app');

describe('Book Integration', () => {
    it('should create a book and retrieve it by ID', async () => {
        const bookResponse = await request(app)
            .post('/books')
            .send({ title: 'Test Book', author: 'Test Author', price: 10, sellerId: 1 });

        const bookId = bookResponse.body.id;

        const getBookResponse = await request(app)
            .get(`/books/${bookId}`);

        expect(getBookResponse.status).toBe(200);
        expect(getBookResponse.body).toHaveProperty('title', 'Test Book');
    });
});
