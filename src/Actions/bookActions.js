const books = [];

function createBook(book) {
    if (!book.title || !book.author || !book.price || !book.sellerId) {
        throw new Error('Invalid data');
    }
    book.id = books.length + 1;
    books.push(book);
    return book;
}

function getBookById(id) {
    return books.find(book => book.id === id);
}

function updateBook(id, data) {
    const book = getBookById(id);
    if (!book) {
        throw new Error('Book not found');
    }
    Object.assign(book, data);
    return book;
}

function deleteBook(id) {
    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
        throw new Error('Book not found');
    }
    books.splice(index, 1);
}

module.exports = { createBook, getBookById, updateBook, deleteBook };
