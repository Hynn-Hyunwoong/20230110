const Config = require('../config');
const mysql = require('mysql2');

// const host = process.env.DB_HOST || '';
// const port = process.env.DB_PORT || '';
// const user = process.env.DB_USER || '';
// const password = process.env.DB_PASSWORD || '';
// const database = process.env.DB_DATABASE || '';

const pool = mysql.createPool(Config.db).promise();

// console.log('config', Config.db)
// console.log(pool);

// Process.Env Test
// console.log(host)
// console.log(port)
// console.log(user)
// console.log(password)
// console.log(database)


// DB Connect Test
// pool.query(`select * from Comment`).then((data)=> console.log(data));

module.exports = pool;

