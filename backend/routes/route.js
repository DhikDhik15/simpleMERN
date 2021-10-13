const express = require('express');
const app = express();
const midInv = require('../middleware/inventory');

module.exports = function (app){
    const inventory = require('../controller/inventory');

    app.route('/addInv').post(inventory.addInv);
}