"use strict";

const midBook = require("../middleware/books");
const bookModel = require("../model/books");

exports.addBook = async (req, res) => {
  try {
    const add = {
      judul: req.body.judul,
      pengarang: req.body.pengarang,
      harga: req.body.harga,
      stok: req.body.stok,
    };
    // if (!add.judul || !add.pengarang || !add.stok || !add.harga) {
    //   res.status(400).json({
    //     message: "can not null",
    //   });
    //   return;
    // } else {
    const data = await midBook.addBook({
      ...add,
    });
    res.status(200).json({
      status: true,
      data: data,
    });
    // }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
      status: false,
    });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const data = await midBook.getBook();
    res.status(200).json({
      status: true,
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
      status: false,
    });
  }
};

exports.putBooks = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({
        messagae: "Content can not be empty",
      });
    }
    bookModel
      .findByIdAndUpdate(
        req.params.id,
        {
          judul: req.body.judul,
          pengarang: req.body.pengarang,
          harga: req.body.harga,
          jumlah: req.body.jumlah,
        },
        { new: true }
      )
      .then((book) => {
        if (!book) {
          return res.status(404).send({
            message: "not found",
          });
        }
        res.send(book);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
      status: false,
    });
  }
};

exports.deleteBooks = async (req, res) => {
  try {
    bookModel.findByIdAndRemove(req.params.id).then((book) => {
      if (!book) {
        return res.status(404).json({
          message: "Book not found",
        });
      }
      return res.status(200).json({
        message: "Deleted",
        status: true,
      });
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      status: false,
    });
  }
};
