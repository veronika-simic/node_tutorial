const fs = require('fs');

const readStream = fs.createReadStream('./files/streamFile.txt');
const writeStream = fs.createWriteStream('./files/newStreamFile.txt')
// on is the eventListener just like in JS when we have a onClick listeners
// just this time we are listening for the data stream
readStream.on('data', (chunk) => {
    console.log('------------')
    console.log(chunk.toString());
  
    writeStream.write(chunk)
})