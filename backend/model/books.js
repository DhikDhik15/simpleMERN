const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    judul: {
        type: String,
    },
    pengarang:{
        type: String,
    },
    harga: {
        type: Number,
    },
    stok: {
        type: Number,
    }

},{
    timestamps: true
});
const inv = mongoose.model("books", bookSchema);
module.exports = inv;