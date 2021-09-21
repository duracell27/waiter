const mongoose = require('mongoose')

const Schema = mongoose.Schema

const waiterSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3
    },
    restorant: {
        type: String,
        required: true,
        minlength: 3
    },
    city: {
        type: String,
        required: true,
        minlength: 3
    },
    imgUrl: {
        type: String,
    }
},{
    timestamps: true
})

const Waiter = mongoose.model('Waiter', waiterSchema)
module.exports = Waiter