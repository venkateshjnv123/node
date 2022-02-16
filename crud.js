const express= require('express')
const crud1 = require('./models/crud1')
const router = express.Router()


router.get('/' ,async(req, res)=> {
    try {
        const users = await crud1.find()
        res.send(users)
    }catch(error){
        res.send('error came')
    }
})

router.post('/', async (req, res) => {
    const data = new crud1({
        name: req.body.name,
        tech : req.body.tech
    })
    try {
        const x = await data.save()
        res.json(x)
    } catch (error){
        res.send("Error came")
    }

})

module.exports = router