//NPM Modules 
const express = require('express');
const app = express();
const config = require('./config');


// Router
const router = require("./routes");

// Usage router
app.use(router);
//Exception handler
app.use((error,req,res,next) => {
    // Currently Response code only 500
    // If failure Sign-in, response code 400, not match 500. 
    // So, result ins not function exception handler. 
    // cause by only response 500 error.
    if(error instanceof Error){
        
    }
});
// console.log('test', config.port);
// console.log(process.env.PORT)
// Launcher of Server.js
app.listen(config.port, () =>{
    console.log(`This is front server start only port on ${config.port}`)
})