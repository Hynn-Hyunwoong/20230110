class CommentRepository{
    constructor({mysql}){
        this.mysql = mysql;
    }

    async findAll (){
        try{const [list] = await this.mysql.query(`SELECT * FROM Comment`);
        return list;
        }catch(e){
            throw new Error(e);
        };
    }

    update(){}

    create(){}

    view(){}
}

module.exports = CommentRepository;