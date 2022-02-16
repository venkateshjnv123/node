var OS = require('os')

console.log(OS.arch());
console.log(OS.freemem() +"\n");
console.log(OS.cpus() + "\n");
console.log(OS.hostname() + '\n');
const user = OS.userInfo();
console.log(user);
console.log(`the system uptime ${OS.uptime} seconds\n`);