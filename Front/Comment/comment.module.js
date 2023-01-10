const mysql = require('../models');
const CommentRepository = require('./comment.repository');

const Repository = new CommentRepository(mysql);

Repository.findAll().then((data)=>console.log(data));