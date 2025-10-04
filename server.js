const os = require('os');

function getUser(){

    return os.userInfoser
}

module.exports=getUser

console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());
console.log("Total Memory (GB):", (os.totalmem() / (1024 ** 3)).toFixed(2));
console.log("Free Memory (GB):", (os.freemem() / (1024 ** 3)).toFixed(2));
console.log("Uptime (minutes):", (os.uptime() / 60).toFixed(2));

