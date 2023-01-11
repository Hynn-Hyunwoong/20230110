// Module is Important step by step
// Repository > Service > Controller

// const {sequelize:{ models : { User } }} = require('../models');
const {sequelize: {models : { Users }}} = require('../models');
const UserRepository = require('./user.repository')

// console.log("User", User);
// console.dir(User);
// 구조분해할당은 최종 대상만 출력됨 
// ex) sequelize, models 는 출력안됨 
// console.log(Users);

const repository = new UserRepository({ Users });
repository.AddUser({userid:'125', userpw:'125', username:'asas'});
repository.GetUserByToken({userid:'1234'}).then((data) => console.log('test', data));



// test repository
console.log(repository);
// test Service

// test Controller