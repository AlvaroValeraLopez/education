const users = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Jane', age: 32 },
    { id: 3, name: 'Jack', age: 24 },
    { id: 4, name: 'Jill', age: 27 }
]

function getUsersById(id, callback) {
    const user = users.find( function(user) {
        return user.id === id;
    });
    
    if(!user) {
        return callback(`User not found with id: ${id}.`);
    }
    return callback(null, user);
}

module.exports = {
     getUsersById,
}