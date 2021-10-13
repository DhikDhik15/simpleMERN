'use strict';

const inv = require ('../model/inventory');
exports.addInv = async add => {
    const inventory = await inv.create(add);
    return inventory
}