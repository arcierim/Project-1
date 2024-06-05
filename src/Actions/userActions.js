const users = [];

function createUser(user) {
    if (!user.name || !user.email) {
        throw new Error('Invalid data');
    }
    user.id = users.length + 1;
    users.push(user);
    return user;
}

function getUserById(id) {
    return users.find(user => user.id === id);
}

function updateUser(id, data) {
    const user = getUserById(id);
    if (!user) {
        throw new Error('User not found');
    }
    Object.assign(user, data);
    return user;
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        throw new Error('User not found');
    }
    users.splice(index, 1);
}

module.exports = { createUser, getUserById, updateUser, deleteUser };
