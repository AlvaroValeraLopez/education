const {getUsersById} = require('./callbacks');

getUsersById(4, function(error, user) {
    if(error) {
        throw new Error(error);
    }
    console.table(user);
});