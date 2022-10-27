const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const authorcontrollers= require("../controllers/authorcontrollers")

//router.get("/test-me", function (req, res) {
   // res.send("My first ever api!")
//})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData

//que1-
router.post("/createauthor", authorcontrollers.createauthor)
router.post("/createBook", BookController.createBook )

//que2-
router.get("/findauthor", authorcontrollers.findauthor)
router.get("/bookie", BookController.bookie)
 
//que3-
router.get("/upbook", BookController.upbook)
router.get("/findabyid", authorcontrollers.findabyid)

//que4-
router.get("/bookprice", BookController.bookprice)

/*router.post("/updateBooks", BookController.updateBooks)
router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})*/

module.exports = router;