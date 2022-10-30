const express = require('express');
const router = express.Router();
const publishercontroller = require("../controllers/publishercontoller")
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createPub",  publishercontroller.createPub )

router.post("/createAuthor", authorController.createAuthor  )

//router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.get("/getBooksWithAuthorAndPublisherDetails", bookController.getBooksWithAuthorAndPublisherDetails)
router.put("/BookWriteBy", bookController.BookWriteBy)
router.put("/updatePrice", bookController.updatePrice)

module.exports = router;