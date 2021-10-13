'use strict'; 

const midInv = require ('../middleware/inventory');

exports.addInv = async (req, res) => {
    try {
        const add = {
            name: req.body.name,
        }
        const data = await midInv.addInv({
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