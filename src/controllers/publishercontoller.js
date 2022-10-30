const publishermodel = require ("../models/publishermodel");


//creating database for publisher 
const createPub = async function (req, res) 
{
    let publisher = req.body
    let pubCreated = await publishermodel.create(publisher)
    res.send({data: pubCreated})
}

module.exports.createPub=createPub ;
