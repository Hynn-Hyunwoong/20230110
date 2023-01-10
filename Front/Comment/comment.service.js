class CommentService{
    constructor({ CommentRepository }){
        this.CommentRepository = CommentRepository
        };
        
        async list(){
            try{
                const list = await this.CommentRepository.findAll();
                if(list.length === 0) throw new Error('No content found, Please try again.')
                return list;
            }catch(e){
                throw new Error(e);
            }
        }
    }

module.exports = CommentService;