const { count } = require("console")
const bookModel = require("../models/bookModel")
const authorcontrollers= require("../controllers/authorcontrollers")
const authormodel = require("../models/authormodel")

//const BookModel= require("../models/bookModel")


//que1- create book
const createBook= async function (req, res) {
    let data= req.body
  let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}  

// que2- get book by author id
 const bookie =async function(req,res){
    let getbooks= await bookModel.find({author_id: 1})
    res.send ({ msg : getbooks})

 }

 //que 3- updating price and finding id by book name
const upbook = async function(req,res){
    let b= await bookModel.findOneAndUpdate( 
        {bookname : "two states"},
        { $set: { price : 100}}).select({bookname :1, price: 1, author_id: 1, _id: 0} )
        res.send({msg : b})

    }

    //que 4-
 const bookprice =async function(req,res){
    let pricebooks= await bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    let bck = await authormodel.find ({ author_id: pricebooks.map(x=>x.author_id)})
    res.send ({ msg: bck})
 } 
/*const getBooksData= async function (req, res) {
    let allBooks= await bookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})}*/





// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.bookie= bookie
module.exports.bookprice=bookprice
module.exports.upbook=upbook
