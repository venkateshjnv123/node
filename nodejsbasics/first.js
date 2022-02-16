var http = require('http');
const func= require('./modules')
const name='venky'
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end("Hello world, venkatesh");
}).listen(8082);
//for using variables or inputs in sentence we can use `` method.
console.log(`dont mess with ${name}`)
console.log(__dirname);
console.log(__filename);
func.print('venky')
func.hello('kiran') ;
console.log('over');