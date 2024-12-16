const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CardSchema = new Schema({
    tag:{
        type: String,
        required: true
    },
    question:{
        type: String,
        require: true
    }
})

const Card = mongoose.model('card', CardSchema)
module.exports = Card