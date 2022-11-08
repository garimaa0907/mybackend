
 
const authenticate = function(req, res, next) 
{
    let token = req.headers['x-auth-token']
  if (!token)  {
 return res.send({ status: false, msg: "token must be present" });}
 let decodedToken = jwt.verify(token, 'my-sceret-key')

  if(!decodedToken) 
  return res.send({status: false, msg:"token is not valid"})
   else
 next()

}

const authorise = function(req, res, next) {
    let token = req.headers['x-auth-token']
    let decodedToken = jwt.verify(token, 'my-sceret-key')
       let userToBeModified = req.params.userID
      let userLoggedIn= decodedToken.userID
      
if(userToBeModified != userLoggedIn) 
return res.send({status: false, msg: 'User logged is not allowed to modify the data'})
    else 
    next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise