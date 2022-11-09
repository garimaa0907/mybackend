const jwt = require("jsonwebtoken");
const authenticate = function(req, res, next) 
{  try{
    let token = req.headers['x-auth-token']
  if (!token)  {
 return res.status(401).send({ status: false, msg: "token must be present" });}
 let decodedToken = jwt.verify(token, 'my-sceret-key')

  if(!decodedToken) 
  return res.status(401).send({status: false, msg:"token is not valid"})
   else
 next()
  }
  catch(err)
  {
    res.status(500).send({ msg : err.message})
  }
}

const authorise = function(req, res, next) {
    try{
    let token = req.headers['x-auth-token']
    let decodedToken = jwt.verify(token, 'my-sceret-key')
       let userToBeModified = req.params.userID
      let userLoggedIn= decodedToken.userID
      
if(userToBeModified != userLoggedIn) 
return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the data'})
    else 
    next()}
    catch(err)
    {
      res.status(500).send( { msg : err.message})}
   
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise