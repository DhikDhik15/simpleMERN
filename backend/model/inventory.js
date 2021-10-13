const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invSchema = new Schema({
    name: {
        type: String,
        required: true
    }
},{
    timestamps: true
});
const inv = mongoose.model("inventory", invSchema);
module.exports = inv;