'use strict'; 

const midBook = require ('../middleware/books');

exports.addBook = async (req, res) => {
    try {
        const add = {
            judul: req.body.judul,
            pengarang: req.body.pengarang,
            harga: req.body.harga,
            stok: req.body.stok
        }
        const data = await midBook.addBook({
            ...add
        });
        res.status(200).json({
            status: true,
            data: data,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getBooks = async (req, res) => {
    try {
        const data = await midBook.getBook();
        res.status(200).json({
            status: true,
            data: data,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}