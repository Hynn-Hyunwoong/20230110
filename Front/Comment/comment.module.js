//Option 1
const Config = require('../config');
//Option 2 
// const {exception} = require('../config');

const mysql = require('../models');
const CommentRepository = require('./comment.repository');
const CommentService = require('./comment.service');
const CommentController = require('./comment.controller');


// {} Most Usage 
const Repository = new CommentRepository({mysql});
// Key:Value 
// Insert INTO config.js
// Option 1 
const Service = new CommentService({CommentRepository : Repository, Config });
//Option 2 
// const Service = new CommentService({CommentRepository : Repository, exception});

// Key:Value
const Controller = new CommentController({ CommentService : Service});


// Test code write incorrect. but completed test of part(Repository, Service parts)

// Repository Code test
// Repository.findAll().then((data)=>console.log(data));

// Service Code test
// Service.list().then((data)=>console.log(data));

//Controller Code test
// Controller.getList().then((data)=>console.log(data));


// { Key of exports Repository, Service and Controller}
module.exports = {    
    Repository,
    Service,
    Controller,
}

// Route is required only Module
