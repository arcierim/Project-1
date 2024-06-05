const { createBook, getBookById, updateBook, deleteBook } = require('../Actions/bookActions');

function createBookController(req, res) {
    try {
        const book = createBook(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

function getBookController(req, res) {
    const book = getBookById(parseInt(req.params.id, 10));
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
}

function updateBookController(req, res) {
    try {
        const book = updateBook(parseInt(req.params.id, 10), req.body);
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

function deleteBookController(req, res) {
    try {
        deleteBook(parseInt(req.params.id, 10));
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = { createBookController, getBookController, updateBookController, deleteBookController };
