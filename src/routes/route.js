const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger/logger.js');
const hel =require("../util/helper");
const form =require("../validator/formattor");
const load =require("../load/lodash");

//importing external package
//import logger module
router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log(" ");
      xyz.welcome();
      console.log(" ");
      console.log(" ");
    hel.getbatchinfo();
    console.log(" ");
    console.log(" ");
    form.formatt();
    console.log(" ");
    console.log(" ");
    load.lodash();

    res.send("my second api")
    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

//PROBEM 2
