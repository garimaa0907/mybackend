/*const { count } = require("console")
const authormodel = require("../models/authormodel")
const publishermodel = require("../models/publishermodel")
const bookmodel = require("../models/bookModel")



//que1- create author
const createauthor= async function(req,res){
    let a= req.body
    let savea = await authormodel.create(a)
    res.send({msg: a})
}
 

//que 2 -get id of author chetan bhagat
const findauthor= async function (req,res)
{
    let authorfi= await authormodel.find({author_name : "chetan bhagat"})
    res.send({msg : authorfi})
}

//que 3-
const findabyid= async function (req,res)
{
    let af= await authormodel.find({author_id : 1})
    res.send({msg : af})
}


module.exports.createauthor= createauthor
module.exports.findauthor=findauthor
module.exports.findabyid=findabyid*/