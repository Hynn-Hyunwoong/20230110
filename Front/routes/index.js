const express = require('express');
const router = express.Router();
const CommentRouter = require('../comment/comment.route')

router.use('/comment', CommentRouter)

module.exports = router;