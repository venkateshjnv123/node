const fs = require('fs')

//synchronous- blocking
//uisng readfilesync and utf-8 to read the file
const first =fs.readFileSync('../content/exam.txt', 'utf-8');
console.log(first);

 //creates a new file 
 //if file exits will oveerite the file
 //set flag as 'a' for appending
for(var i=0; i<1000; i++){
    fs.writeFileSync('../content/rite.txt',`iit jodhpur in the year ${i}`,{flag :'a'});
}
fs.writeFileSync('../content/rite.txt','iit jodhpur',{flag :'a'});
