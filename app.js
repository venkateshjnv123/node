// const express = require('express')
// const mongoose = require('mongoose')

// const url = 'mongodb://localhost/aliendb'

// const app = express()

// mongoose.connect(url, {useNewUrlParser: true})

// const con = mongoose.connection

// con.on('open', function(){
//     console.log("connecte...d")
// } )

// app.use(express.json())
// const crudRouter = require('./crud')
// const bookRouter = require('./book')
// app.use('/book', bookRouter)
// app.use('/aliens', crudRouter)


// app.listen(9000, function(){
//     console.log('server connected')
// })

  
const express = require('express')
const path = require('path')
const app= express()

let {people}=require('./data')
const routes = require('./routespeople')
app.use(express.static('./methods'))


//we have to use urlencoded
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/people', routes)


app.post('/login',(req,res) => {
    const {name} = req.body;
    if(name){
        res.send(`welcome to page ${name}`)
    }else{
        res.send('enter valid name')
    }
})


app.listen(5000, () => {
    console.log('i')
})

//app.get
//app.post
//app.delete
//app.update
//app.all
//app.use
//app.listen