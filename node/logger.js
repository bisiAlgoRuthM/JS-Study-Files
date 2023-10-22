

var url = 'http://mylogger.io/log'

function log(message){
    console.log(message)
}

//make logger.js accesible
//module.exports.log = log; as an object
module.exports = log;