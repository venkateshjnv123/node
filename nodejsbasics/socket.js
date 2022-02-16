const { Socket } = require('dgram')
const net= require('net')
var name='venky'
var server = net.createServer((Socket)=>{
    Socket.end(`${name} : hello`);
}).on('error', (err)=>{
    throw err;
});

server.listen(()=>{
    address = server.address();
    console.log(address);
})