const os = require('os');
const newOs =os.networkInterfaces()

console.log(newOs)

const upOs =os.uptime()

console.log(`The system has been running for ${upOs} seconds`)

const currentOS ={
    name: os.type(),
    relases: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
