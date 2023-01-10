//ENV 
require("dotenv").config();

//NPM Modules 
const express = require('express');
const app = express();


// Router
const router = require("./routes");

// ENV Port
const PORT = process.env.PORT || 3000


// Usage router
app.use(router);

// console.log(process.env.PORT)
// Launcher of Server.js
app.listen(PORT, () =>{
    console.log(`This is front server start only port on ${PORT}`)
})