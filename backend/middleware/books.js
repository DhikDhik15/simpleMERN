"use strict";

const book = require("../model/books");

exports.addBook = async (add) => {
  const books = await book.create(add);
  return books;
};
exports.getBook = async (get) => {
  const getBook = await book.find();
  return getBook;
};

