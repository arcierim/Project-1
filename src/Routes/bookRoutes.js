const express = require('express');
const { createBookController, getBookController, updateBookController, deleteBookController } = require('../controllers/bookController');

const router = express.Router();

router.post('/', createBookController);
router.get('/:id', getBookController);
router.put('/:id', updateBookController);
router.delete('/:id', deleteBookController);

module.exports = router;
