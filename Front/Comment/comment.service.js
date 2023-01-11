class CommentService{
    constructor({ CommentRepository, Config }){
        this.CommentRepository = CommentRepository
        this.Config = Config
        this.HttpException = Config.exception.HttpException
        };
        
        async list(){
            try{
                const list = await this.CommentRepository.findAll();
                throw 'No content found, Please try again.'
                return list;
            }catch(e){
                throw new this.HttpException(e);
            }
        }
    }

module.exports = CommentService;