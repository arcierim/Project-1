const { createBook, getBookById, updateBook, deleteBook } = require('../../src/actions/bookActions');

describe('Book Actions', () => {
    it('should create a book', () => {
        const book = createBook({ title: 'Test Book', author: 'Test Author', price: 10, sellerId: 1 });
        expect(book).toHaveProperty('id');
    });

    it('should throw error if data is invalid on book creation', () => {
        expect(() => createBook({ title: '', author: 'Test Author', price: 10, sellerId: 1 })).toThrow();
    });

    it('should get a book by id', () => {
        const book = createBook({ title: 'Test Book', author: 'Test Author', price: 10, sellerId: 1 });
        const fetchedBook = getBookById(book.id);
        expect(fetchedBook).toEqual(book);
    });

    it('should update a book', () => {
        const book = createBook({ title: 'Test Book', author: 'Test Author', price: 10, sellerId: 1 });
        const updatedBook = updateBook(book.id, { title: 'Updated Book' });
        expect(updatedBook.title).toBe('Updated Book');
    });

    it('should delete a book', () => {
        const book = createBook({ title: 'Test Book', author: 'Test Author', price: 10, sellerId: 1 });
        deleteBook(book.id);
        expect(() => getBookById(book.id)).toThrow('Book not found');
    });
});
