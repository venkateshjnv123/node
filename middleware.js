const authorise = require('./authorize')
const morgan = require('morgan')

//middleware function which can be used in ap.js
//options in middleware - our own - like we created this
//inbuilt express ones- app.use(express.static('./public')) - provides static middleware
//third one is from third-party.


//every browser uses the get request for website startting
//sendfile is used to render the whole files, while send is used to write text only

//in app.use we can call all the static files like css, javascript
//we can put all our files in public and render that folder using middleware
//app.use(express.static('./public'))
//also used for setting up the middleware

//we can use app.use() for middleware functions to make them apply to all the routes.
//we can also give specific routes to them

//app.use(authorise);
app.use(morgan('tiny'))
//middleware function
const logger = (req,res,next) => {
    const method= req.method;
    const url=req.url;
    console.log(method, url);
    next();
}
app.get('/',logger ,(req,res)=> {
    // res.send(req.user.name);
    res.send('hello')
})

app.get('/about', (req,res)=> {
    res.send('About')
})
