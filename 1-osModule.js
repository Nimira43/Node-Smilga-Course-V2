const os = require('os')

// info about user
const user = os.userInfo()
console.log(user)

// system uptime 
console.log(`System uptime is ${os.uptime()} seconds`)

// info about OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)

/* 

{
  uid: -1,
  gid: -1,
  username: 'arimi',
  homedir: 'C:\\Users\\arimi',
  shell: null
}
System uptime is 698390.531 seconds
{
  name: 'Windows_NT',
  release: '10.0.22621',
  totalMem: 8404070400,
  freeMem: 2290376704
}

*/