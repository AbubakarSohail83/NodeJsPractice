const os=require('os')
require('./4-MindGrenade')

//info about current user
const user=os.userInfo()
console.log(os.userInfo()) 
// console.log(user)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(), 
}

console.log(currentOS)


