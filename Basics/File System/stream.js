// Streams and buffer are used for large files.
// They start using the data in the file before reading the file completely thus making it faster

const fs = require('fs');

const readStream = fs.ReadStream('./docs/file3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/file4.txt');

/*
'.on' is a event which activates everytime we recieve a chunk of data from the file so that we can process it
*/
readStream.on('data', (chunk) => {
    console.log("--------- NEW CHUNK ----------");
    console.log(chunk);
    /* Every time we recieve a new chunk of data from readStream we can write it into the new file i.e 'file4.txt' */
    writeStream.write('\n New Chunk \n');
    writeStream.write(chunk);
})