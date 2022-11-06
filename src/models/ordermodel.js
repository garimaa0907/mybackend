const mongoose = require('mongoose');
const bookModel = require('./bookModel');
const ObjectId = mongoose.Schema.Types.ObjectId
const ObjectIdd = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId : {
        type : ObjectId ,
        ref : 'userDocument',
        required : true 
    },
    productId :{
       type: ObjectIdd,
        ref : 'productDocument',
        required: true
    },
     amount : Number,
     isFreeAppUser : Boolean,
    date : Date 
}, { timestamps: true });

module.exports = mongoose.model('orderDocument', orderSchema)
