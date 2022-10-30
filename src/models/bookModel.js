const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const ObjectIdd = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    Bookname: String,
    author_id: {
        type: ObjectId,
        ref : "newAuthor"
    }, 
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectIdd,
        ref: "newPublisher"
    },
    isHardCover:{
        type: Boolean,
        default: false
    }
    
}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
