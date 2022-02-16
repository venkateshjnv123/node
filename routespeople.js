const express= require('express')
const router= express.Router();
let {people}=require('./data')
//beccause the base path is already set in the middleware, app.use
//so we can just use forward slash.
//we have t use router here and not app.put
//so methods are router.get...etc
//and lastly export the router

router.get('/',(req,res) => {
    res.json({success : true, data: people})
})


router.post('/', (req,res)=>{
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success : false, msg: 'enter a valid name value'})
    }
    res.status(201).json({success:true,person : name})
})
router.put('/:id', (req,res)=>{
    const {id}= req.params
    const {name} = req.body;
    //we have to channge the id to number- typecasting
    const person = people.find((person) => person.id === Number(id))

    if(!person){
        return res.status(404).send("no person with id rfound")
    }
    const newpeople = people.map((person)=> {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person
    })
    res.status(200).json({success: true , data: newpeople})
})

router.delete('/:id' , (req,res)=>{
    const {id} = req.params;
    const person = people.find((person) => person.id === Number(id))

    if(!person){
        return res.status(404).send(`no person with id rfound with ${req.params.id}`)
    }
    const newpeople = people.filter(
        (person) => person.id!==Number(id)
    )
    res.status(200).json({success: true , data: newpeople})


})

module.exports = router