const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemDetail = new Schema({
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    city: {
        type: String
    }
});

const itemSchema = new Schema({

    name: {
        type: String,
        required: [true,'Name field is required']
    },
    rank: {
        type: String
    },
    Retirement: {
        type: Boolean,
        default: false
    },
    Details: itemDetail

});


const Item = mongoose.model('item',itemSchema);
module.exports = Item;