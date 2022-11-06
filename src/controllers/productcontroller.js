const proone= require("../models/productmodel")


const createproduct = async function(req,res)
{

    const {name, category , price}=req.body
    if (!name || !category || !price){
        return res.send ("all fields are mandatory")}

    let producthere= await proone.create({name, category, price})
     res.send ({data : producthere})
}

module.exports.createproduct= createproduct
