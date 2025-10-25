const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mydatabase");

const productSchema = new mongoose.Schema({

    image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0,
    },
    bgcolor: String,
    panelColor: String,
    textColor: String,
});

const Product = mongoose.model('Product', productSchema);

// this i tried totally different 
module.exports = Product;