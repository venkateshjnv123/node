const express = require('express')

const path = require('path')
const app= express()
const {products} = require('./data.js')
//every browser uses the get request for website startting
//sendfile is used to render the whole files, while send is used to write text only

//in app.use we can call all the static files like css, javascript
//we can put all our files in public and render that folder using middleware
//app.use(express.static('./public'))
//also used for setting up the middleware

app.get('/' , (req, res) =>{
     //we can also add index.html to static files
     //template engines for server side rendering
     //res.sendFile(path.resolve(__dirname, './index.html'))
     //res.json(products)
     res.send("<h1>click to products </h1> <a href='/api/products' >produtscs </a> ")
 //res.status(200).send("hello")
 })

 app.get('/api/products' , (req,res) => {
     const newproducts = products.map((product) => {
         const {name} = product 
         return {name}
     } )
     res.json(newproducts)
     })
//route paramters 
     app.get('/api/products/:uid' , (req,res) => {
         console.log(req.params)
         //this will give the uid as a string so change it to a number
        const productselect = products.find((product) => product.id === Number( req.params.uid))
        //if no product mataches
        if(!productselect){
            res.status(404).send('prodct not found')
        }
        res.json(productselect)
        })

//writin a query ; ?name='venky'
//query parameters  - /api/v1/query?search='venky'&limit=2 
//req.query gives, {search : 'venky', limit:2}
app.get('/api/v1/query' , (req, res) => {
    console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]
    if(search) {
    sortedProducts = sortedProducts.filter((product) => {
          return product.name.startsWith(search)
      })
    }
    //we can set the limit
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.json(sortedProducts)
})
//handles all http requests
app.all('*', (req, res) => {
    //we can give status code in res. approach.
    res.status(404).send("page not sound")
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