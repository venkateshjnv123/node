const Http = require('http')

const {readFileSync} = require('fs')

const homepage = readFileSync('./index.html')
const homepage1 = readFileSync('./index.js')
//status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//mime types- https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
const server = Http.createServer((req, res) =>{
    if(req.url === '/'){
        res.writeHead( 200, {'content-type': 'text/html'})
        res.write(homepage)
        res.end()
    }
    else{
        res.writeHead( 404, {'content-type': 'text/plain'})
        res.write("page not found")
        res.end()
    }
    
})

server.listen(5000);