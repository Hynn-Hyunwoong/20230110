//NPM Modules 
const express = require('express');
const app = express();
const Config = require('./config');
const HttpException = require('./Exceptions/HTTPException');
const { sequelize } = require("./models/")

// console.log(sequelize)
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
    // if(error instanceof Error){}
    console.error(error);
    // If Error target settings, Error is last setting, first target and then error.
    if(error instanceof HttpException){
        res.json({
            isError : true,
            message : error.message,
            status : error.status,
        })
    }else if(error instanceof Error){
        res.json({
            isError : true,
            message : error.message,
        })
    }
   
});
// console.log('test', config.port);
// console.log(process.env.PORT)
// Launcher of Server.js
app.listen(Config.port, async () =>{
    await sequelize.sync({ force : false })
    console.log(`This is front server start only port on ${Config.port}`)
})