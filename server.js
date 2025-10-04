const os = require('os');

function getUser(){

    return os.userInfoser
}

module.exports=getUser

console.log(getUser())