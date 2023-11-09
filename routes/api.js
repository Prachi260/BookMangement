const express = require('express');
const router = express.Router();
const Book = require('../models/books');

// get a list of books from the database
router.get('/books',function(req,res,next){
    Book.find({}).then(function(books){
        res.send(books);
    }).catch(next);
});

router.get('/books/:id',function(req,res,next){
    Book.findOne({}).then(function(books){
        res.send(books);
    }).catch(next);
});

// add a new book to database
router.post('/books',function(req,res,next){
    Book.create(req.body).then(function(book){
        res.send(book);
    }).catch(next);
});

// update a book in the database
router.put('/books/:id',function(req,res,next){
    Book.findOneAndUpdate({_id: req.params.id},req.body).then(function(book){
        Book.findOne({_id: req.params.id}).then(function(book){
            res.send(book);
        });
    });
});

// delete a book in the database
router.delete('/books/:id',function(req,res,next){
    Book.findOneAndDelete({_id: req.params.id}).then(function(book){
        res.send(book);
    }).catch(next);
});

module.exports = router;