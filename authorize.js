//middleware function which can be used in ap.js
//options in middleware - our own - like we created this
//inbuilt express ones- app.use(express.static('./public')) - provides static middleware
//third one is from third-party.
const authorise = (req,res,next) => {
    const {user} = req.query;
    if(user == 'venky'){
        req.user = {name:'venky'};
        next();
    }else{
        res.status(401).send('Unauthorise')
    }
    
}

module.exports = authorise