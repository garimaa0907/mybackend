const authormodel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishermodel= require("../models/publishermodel")

//creating books
const createBook= async function (req, res) {
    let book=req.body
    let {author_id, publisher}=req.body
    if(!author_id){
        res.send("require author id")
    }
    if(!publisher){
        res.send("require publisher id")
    }
    let authorData=await authormodel.findById(book.author_id)
    if(!authorData){
        res.send("author is not present")
    }
    let publisherData=await publishermodel.findById(book.publisher)
    if(!publisherData){
        res.send("Publisher is not present")
    }
   // console.log(authorName)
    else
    {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}
//bookdetails with author and publisher
const getBooksWithAuthorAndPublisherDetails = async function (req, res)
 {
    let specificBookFulldata = await bookModel.find().populate('author_id').populate('publisher');
    res.send({data: specificBookFulldata})

}
 //updating key to true
const BookWriteBy = async function(req, res){
    let key=await publishermodel.find({name:["Penguin","HarperCollins"]}).select({_id:1});
    let key1=await bookModel.find({publisher:key}).select({_id:1});
    for (let index = 0; index < key1.length; index++) {
        const element = key1[index];
        let key001=await bookModel.findByIdAndUpdate(element,{$set:{isHardCover:true}})

    res.send(key001)
    }}


    //price update
const updatePrice=async function(req, res){

    let key = await authormodel.find({ rating:{$gte:3.5}}).select({_id:1});
    let books=await bookModel.find({author:key}).select({_id:1})
    for (let index = 0; index < books.length; index++) {
        const element = books[index];
        let update= await bookModel.findByIdAndUpdate(element,{$inc:{price:10}})
    res.send(update)
    

}
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBooksWithAuthorAndPublisherDetails=getBooksWithAuthorAndPublisherDetails
module.exports.BookWriteBy= BookWriteBy
module.exports.updatePrice= updatePrice
