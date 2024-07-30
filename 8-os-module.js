// Built-in Modules
// OS

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`the system uptime is: ${os.uptime()} Seconds`)

const currentOS = {
    name:os.type(),
    relese:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(currentOS)