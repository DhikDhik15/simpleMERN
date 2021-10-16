const express = require('express');
const app = express();

module.exports = function (app){
    const books = require('../controller/books');

    app.route('/add').post(books.addBook);
    app.route('/get').get(books.getBooks);
    app.route('/put/:id').put(books.putBooks);
    app.route('/del/:id').delete(books.deleteBooks);
}