require("dotenv").config();
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log('This is front server start only port on ${PORT}')
})