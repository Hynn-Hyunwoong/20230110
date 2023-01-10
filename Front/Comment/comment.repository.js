const findAll = async () => {
    const result = await mysql.query("SELECT * FROM Comment")
    return result 
}
module.exports = (test) => {
    return {

    }
};