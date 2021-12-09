var http = require('http')
var greet = require('./calc.js')
var fs=require('fs')
const express = require('express');
const app = express();

 app.listen(8090);

 app.get('/',function(req, res){
     res.send('hello world')
 } )
//single threaded application
//Asynchronous
//non-blocking I/O
//readfile (filename, encoding, callback)
// fs.readFile('calc.js', 'utf8', function(err, data){
//     console.log(data)
// } )

// fs.writeFile('car.js', 'console.log("done")', function(err){
//     console.log("saved")
// })