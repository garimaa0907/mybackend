
const auth = function (req, res , next)
{
    let token= req.headers["x-auth-token"]
    if(!token){
        return res.send(" headers is not present ")
    }
  else {
    console.log("flow of control pass to handler")
    next()
}
}

module.exports.auth=auth