const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel")
const BookController= require("../controllers/BookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser)

//router.get("/getUsersData", UserController.getUsersData)
  
router.post("/createBook" , BookController.createBook)
 
router.post("/getBookData" , BookController.getBookData)


module.exports = router;