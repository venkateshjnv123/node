const http=require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('<h1>home</h1>')
    }else if(req.url === '/add'){
        res.end('<h2>add</h2>')
    }
    else{
        res.end('hello');
    }
})

server.listen(8000);