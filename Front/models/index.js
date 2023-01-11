require('dotenv').config({path: "../.env"});
const Config = require('../config.js');

// Class 
const Sequelize = require('sequelize');


const env = Config.env;
const db = Config.db[env];

//Instance 
// 변수명은 순서그대로
// === createPool 
const sequelize = new Sequelize(db.database, db.username, db.password, db)
// const user = require("./model/") //function 
// user(sequelize, Sequelize) // action


//launch the create model via Sequelize
const user = require("./user.model")(sequelize, Sequelize)
// console.dir(user)
// console.log(sequelize.models.Users === user) //true.


// console.log('Config 확인', Config);
// console.log('env', env);
// console.log('dev', Config.db[env]);
// console.log('seq', Sequelize);
// console.log('seq', typeof Sequelize);
// console.log('sequelize', sequelize)


// console.log(sequelize);



// const mysql = require('mysql2');

// // const host = process.env.DB_HOST || '';
// // const port = process.env.DB_PORT || '';
// // const user = process.env.DB_USER || '';
// // const password = process.env.DB_PASSWORD || '';
// // const database = process.env.DB_DATABASE || '';

// const pool = mysql.createPool(Config.db).promise();

// // console.log('config', Config.db)
// // console.log(pool);

// // Process.Env Test
// // console.log(host)
// // console.log(port)
// // console.log(user)
// // console.log(password)
// // console.log(database)


// // DB Connect Test
// // pool.query(`select * from Comment`).then((data)=> console.log(data));

// module.exports = pool;

module.exports = {
    Sequelize,sequelize
}

