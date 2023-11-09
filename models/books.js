const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create books schema & model
const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    author: {
        type: String,
    },
    summary: {
        type: String,
    }
});


const Book = mongoose.model('book',BookSchema);

module.exports = Book;