const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minLenghth: 3,
        trim: true,
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: [],
    },
    contact: Number,
    image: String,
    gstin: String,
});

const Owner = mongoose.model('Owner', ownerSchema);

// this i tried totally different 
module.exports = Owner;
