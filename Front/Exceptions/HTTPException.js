class HttpException extends Error {
    constructor(message){
        super(message);
        this.status = 500
    }
}

module.exports = HttpException;

// const e = new HttpException("Not Found Request data", 500);
// console.log('test1 const e', e)
// console.log('test e,message and e.status', e.message, e.status);

// "e" is Object 
// cause is Instance (original form)
// It's prototype is Object
// console.log('typeof e', typeof e);


