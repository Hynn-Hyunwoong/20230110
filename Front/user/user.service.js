class UserService {
    constructor({ UserRepository}){
        this.UserRepository = UserRepository;

    };

    async SignUp({ userid, userpw, username }){
        try{
            //add to logic 
            const user = await this.UserRepository.AddUser({userid, userpw, username});
            return user;
        }catch(e){
            throw new Error (e)
        }
    }
};

module.exports = UserService;