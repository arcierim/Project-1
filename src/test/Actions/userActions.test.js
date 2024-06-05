const { createUser, getUserById, updateUser, deleteUser } = require('../../src/actions/userActions');

describe('User Actions', () => {
    it('should create a user', () => {
        const user = createUser({ name: 'John Doe', email: 'john@example.com' });
        expect(user).toHaveProperty('id');
    });

    it('should throw error if data is invalid on user creation', () => {
        expect(() => createUser({ name: '', email: 'invalid' })).toThrow();
    });

    it('should get a user by id', () => {
        const user = createUser({ name: 'John Doe', email: 'john@example.com' });
        const fetchedUser = getUserById(user.id);
        expect(fetchedUser).toEqual(user);
    });

    it('should update a user', () => {
        const user = createUser({ name: 'John Doe', email: 'john@example.com' });
        const updatedUser = updateUser(user.id, { name: 'Jane Doe' });
        expect(updatedUser.name).toBe('Jane Doe');
    });

    it('should delete a user', () => {
        const user = createUser({ name: 'John Doe', email: 'john@example.com' });
        deleteUser(user.id);
        expect(() => getUserById(user.id)).toThrow('User not found');
    });
});
