const mysql = require('../models');
const CommentRepository = require('./comment.repository');
const CommentService = require('./comment.service');

const Repository = new CommentRepository({mysql});
// Key:Value 
const Service = new CommentService({CommentRepository : Repository});

// Repository.findAll().then((data)=>console.log(data));
// Service.list().then((data)=>console.log(data));
