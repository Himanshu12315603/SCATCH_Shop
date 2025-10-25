const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mydatabase");

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: [],
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: [],
    },
    contact: Number,
    image: String,
});

const User = mongoose.model('User', userSchema);

// this i tried totally different 
module.exports = User;