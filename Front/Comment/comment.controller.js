class CommentController {
    constructor({ CommentService }){
        this.CommentService = CommentService;
    }
    async getList(req, res, next){
        try{
            const comment = await this.CommentService.list();
            res.json(comment);
        }catch(e){
            next(e);
        }
    }
}

module.exports = CommentController;