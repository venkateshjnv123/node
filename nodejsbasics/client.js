const net = require('net')
const client = net.connect({port: 51659}, () => {
    console.log('connected');
    client.write('world')
});
client.on('data', (data)=>{
    console.log(data.toString());
    client.end();
});
client.on('end', ()=>{
    console.log('disconnected')
})