let axios = require("axios")


let getbyDistricts = async function (req,res)
{
    try{
        let id= req.query.district_id
        let date= req.query.date
        let options ={
            method :'get',
             url :`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let getDistricts = await axios(options);
        let data = getDistricts.data
        res.status(200).send({msg : data})
    }
    catch(err){
     res.status(500).send({msg : err.message})
    }
} 

 let getWeatherOfLondon = async function (req,res)
 {
    try{
        let q= req.query.q
        let appid= req.query.appid
        let options= {
            method : 'get',
            url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios (options);
        let data = result.data;
    
        res.status(200).send({msg : data})

    }
    catch(err){
        res.status(500).send({msg : err.message})
    }   
 }

 let getWeatherOf = async function (req,res)
 {
    try{
        let q= req.query.q
        let appid= req.query.appid
        let options= {
            method : 'get',
            url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios (options);
        let data = result.data;
        let m=data.main.temp;
        res.status(200).send({msg : m})

    }
 
    catch(err){
        res.status(500).send({msg : err.message})
    }   
 }

let getMeme = async function(req,res){
    try{
            let template_id=req.query.template_id
            let text0  = req.query.text0
            let text1 = req.query.text1
            let username = req.query.username
            let password = req.query.password
            let options ={
                method :"post",   
                url :`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}` 
             }
          let result= await axios(options)
          let data = result.data
          res.status(200).send({msg : data})
            
        }
    catch(err){
        res.status(500).send({msg : err.message})
    }
}

 module.exports.getbyDistricts= getbyDistricts
module.exports.getWeatherOfLondon=getWeatherOfLondon
module.exports.getMeme=getMeme
module.exports.getWeatherOf=getWeatherOf