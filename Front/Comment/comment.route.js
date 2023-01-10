const express = require('express');
const router = express.Router();
const { Controller } = require("./comment.module");



// Previous write code sample
// Why? Target(this) is changed
// router.get('/', controller.getList)


// Sample of Closure function including req,res and next
router.get('/', (req,res,next) => Controller.getList(req,res,next));

  
module.exports = router