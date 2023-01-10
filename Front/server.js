require("dotenv").config();
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const PORT = process.env.PORT || 3000

// console.log(process.env.PORT)

app.listen(PORT, () =>{
    console.log(`This is front server start only port on ${PORT}`)
})