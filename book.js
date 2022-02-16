const express= require('express')
const router = express.Router()

router.get('/' , (req, res)=> {
    res.send("get request for book")
})

module.exports = router