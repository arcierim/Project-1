const { createUser, getUserById, updateUser, deleteUser } = require('../Actions/userActions');

function createUserController(req, res) {
    try {
        const user = createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

function getUserController(req, res) {
    const user = getUserById(parseInt(req.params.id, 10));
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
}

function updateUserController(req, res) {
    try {
        const user = updateUser(parseInt(req.params.id, 10), req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

function deleteUserController(req, res) {
    try {
        deleteUser(parseInt(req.params.id, 10));
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = { createUserController, getUserController, updateUserController, deleteUserController };
