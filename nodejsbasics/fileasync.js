//we will use callback funtions
//we have to use Asynchronous approach.
const fs = require('fs')
fs.readFile('../content/exam.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
    return    }
    console.log(result)
})
console.log('start')
fs.writeFile('../content/rite.txt','i am a good boy', (err,result) => {
    if(err){
        console.log(err)
    return    }
    console.log('doing')
})

console.log('end')