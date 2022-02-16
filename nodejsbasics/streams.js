const { create } = require('domain');
const {createReadStream} = require('fs');

const stream = createReadStream('./content/rite.txt', {highWaterMark: 10000, encoding: 'utf-8'})

//reads the data in chunks.
//we can use streams to read big files
//highwatermark - to control the size
//encoding- utf-8 gives the chuck of data in string, text
stream.on( 'data', (result) => {
    console.log(result);
})

//if we send data by readfile we are sending the whole file and size may effect the user experience.
//using streams we can reduce the load.
//filestream.pipe() - write stream.
 