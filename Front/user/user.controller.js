class UserController {
    constructor({ UserService }){
        this.UserService = UserService;
    };
    async PostSignUp(req,res,next){
        try{
            const { userid, userpw, username } = req.body;
            const response = await this.UserService.SignUp({ userid,userpw,username });
            res.status(201).json(response);
        }catch(e){
            throw new Error(e);
        };
    };
};

module.exports = UserController;