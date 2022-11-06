const ordermodel= require("../models/ordermodel")
const productmodel= require("../models/productmodel")
const userdmodel = require("../models/userdmodel")
const { isValidObjectId } = require ('mongoose')

const createorder= async function(req,res){
    const {productId , userId} = req.body 
    if (!productId || !userId){
        return res.send({msg : "productid and userid is mandetory"})
    }

if (!isValidObjectId(productId)){
    return res.send({msg : "productId is not valid objectid"})
}
  if (!isValidObjectId(userId))
  {
    return res.send({msg : "userId is not valid"})
  }

  const userDetails = await userdmodel.findById(userId)

  if(!userDetails)
  {
    return res.send({msg : "user are not present "})

  }

const productDetails = await productmodel.findById(productId)

if (!productDetails){
    return res.send({msg : "product is not present "})
}

const isFreeAppUser = req.isFreeAppUser
if(!isFreeAppUser)
{ const order= await ordermodel.create({
    userId : userId,
    productId : productId ,
    amount : 0,
    isFreeAppUser : isFreeAppUser,
    date : new Date()
})



return res.send({msg : order})}else {

    if(userDetails.balance<productDetails.price){
        return res.send({msg : "you dont have sufficient value"})
    }

    const orderdetails ={
                  userId: userId,
                productId:productId,
                amount: productDetails.price,
                isFreeAppUser: isFreeAppUser, 
                date: new Date()

    } 
    const order = await ordermodel.create(orderdetails)
 const user = await userdmodel.findByIdAndUpdate(userId, {$inc : {balance: -productDetails.price}})


return res.send({msg : order})

return res.send({data : user})
}}


module.exports.createorder=createorder