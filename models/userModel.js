const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name']
    },
    email: {
        type: String,
        required: [true, 'please add the user email address'],
        unique: [true, 'Email address is already taken' ],
    },
    password: {
        type: String,
        required: [true, 'please add the user password'],
    },
},
{
    timestamps: true,
}
);

const User = mongoose.model('User', userSchema);
module.exports = User;