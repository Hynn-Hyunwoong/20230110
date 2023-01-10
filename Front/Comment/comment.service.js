module.exports = (Repository) => {
    return {
        list : async () =>{
            const list = await Repository.findAll();
            return list
        }
    }
}