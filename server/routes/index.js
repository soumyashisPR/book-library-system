var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
const JSON_FILE_PATH = __dirname + '/books.json';

router.get('/books', function (req, res, next) {
    let rawdata = fs.readFileSync(JSON_FILE_PATH);
    let booksInfo = JSON.parse(rawdata);
    res.end(JSON.stringify(booksInfo));
});

router.post('/book', function (req, res, next) {
    let rawdata = fs.readFileSync(__dirname + '/books.json');
    let newBook = req.body;
    let booksInfo = JSON.parse(rawdata);
    if (booksInfo.books) {
        newBook.id = booksInfo.books.length + 1;
        booksInfo.books.push(newBook);
    } else {
        booksInfo.books = [newBook];
        newBook.id = 0;
    }
    fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(booksInfo));
    res.end();

});


router.put('/book', function (req, res, next) {
    let rawdata = fs.readFileSync(__dirname + '/books.json');
    let existingBooksInfo = JSON.parse(rawdata);
    let book = req.body;

    existingBooksInfo.books = existingBooksInfo.books.map(function (existingBook) {
        if (existingBook.id === book.id) {
            return Object.assign({}, existingBook, book);
        } else {
            return existingBook;
        }
    });

    fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(existingBooksInfo));
    res.end();

});

module.exports = router;
