require('dotenv').config();
const HttpException = require('./Exceptions/HTTPException');

//DB Area
const host = process.env.DB_HOST || '';
const port = process.env.DB_PORT || '';
const user = process.env.DB_USER || '';
const password = process.env.DB_PASSWORD || '';
const database = process.env.DB_DATABASE || '';


const Config = {
    exception : {
        HttpException
    },
    port : process.env.PORT || 3000,
    db : {
        // host,port,user,password,database,
        // dialet - What is your database ? mysql...
        development : {
            username : user,
            password : password,
            database : database,
            port : port,
            host : host,
            dialet : "mysql"
        },
        test: {
            username : user,
            password : password,
            database : database,
            port : port,
            host : host,
            dialet : "mysql",
            logging : false,
        },
    },
}

// console.log(Config.db)

module.exports = Config;