const mysql = require('../models');
const CommentRepository = require('./comment.repository');
const CommentService = require('./comment.service');
const CommentController = require('./comment.controller');

// {} Most Usage 
const Repository = new CommentRepository({mysql});
// Key:Value 
const Service = new CommentService({CommentRepository : Repository});
// Key:Value
const Controller = new CommentController({ CommentService : Service});


// Test code write incorrect. but completed test of part(Repository, Service parts)

// Repository Code test
// Repository.findAll().then((data)=>console.log(data));

// Service Code test
// Service.list().then((data)=>console.log(data));


// { Key of exports Repository, Service and Controller}
module.exports = {    
    Repository,
    Service,
    Controller,
}

// Route is required only Module
