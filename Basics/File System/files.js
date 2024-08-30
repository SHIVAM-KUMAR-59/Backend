// Module require to work with files is called "fs", it stands for File System
const fs = require("fs");

// Reading Files

/*
fs.readFile() function is used to read the content of a file.
It takes two parameters: the path to the file and a callback function.
The callback function is called with two parameters: the first one is any error that we might face and second is the the data of the file
It is an asynchronous function which means it does not blocks the working of any other function written after it
*/

fs.readFile("./docs/file1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// Writing Files

/*
fs.writeFile() function is used to write the content of a file.
Asynchronously writes data to a file, replacing the file if it already exists.
If the file does not exist then it simply create the file and the write in it
*/
fs.writeFile("./docs/file1.txt", "Hello World!", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File has been written");
});

// file2.txt does not exist before this function but after running it, the function creates the file and writes into it
fs.writeFile("./docs/file2.txt", "Hello World!", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File has been written");
});

// Directories

/* 
fs.mkdir() function is used to create a new directory asynchronously
If the folder of same name already exists then it shows error so its better to check first for the name of the directory if it exists already or not
*/
if (!fs.existsSync("./assets")) { // Check for the existence of the name
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Directory has been created");
  });
}else{ // Delete the directory if it already exists
    fs.rmdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('Directory has been deleted')
    });
}

// Delete Files
/* To check the functionality of this function, create a 'deleteme.txt' file in the docs folder */
if(fs.existsSync('./docs/deleteme.txt')){ // Check if it exists or not
    fs.unlink('./docs/deleteme.txt', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('File has been deleted');
    });
}else{
    console.log("File does not exist");
}
