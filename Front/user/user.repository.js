class UserRepository {
    constructor({ Users }){
        this.Users = Users;
    }

    async AddUser(payload){
        try{
            // const users1 = await this.Users.create({ userid: ${userid}, userpw:${userpw}, username: ${username}});
            // const users2 = await this.Users.create({userid:'124', userpw:'124', username:'asd'}); // like this "req.body"
            const users = await this.Users.create(payload);
            return users;
        }catch(e){
            throw new Error(e);
        };
    };

    async GetUserByToken({ userid }){
        // findOne = select * from users
        // inclusive where userid='Hynn'
        const user = await this.Users.findOne({
            where:{
                userid:userid,
            },
        })

        return user.dataValues
    }
};

module.exports = UserRepository