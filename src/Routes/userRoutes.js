const express = require('express');
const { createUserController, getUserController, updateUserController, deleteUserController } = require('../controllers/userController');

const router = express.Router();

router.post('/', createUserController);
router.get('/:id', getUserController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

module.exports = router;
