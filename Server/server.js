
// Importing the http module
const http = require('http');
const fs = require('fs');

// Create a server

/*
The 'req' object contains information about the request made by the user
The 'res' object is used to send a response back to the user
*/
const server = http.createServer((req, res) =>{

    // Set header content type
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    // Send response back to the user
    /*
    res.write('<h1>Hello World</h1>');
    res.write('<p>Hello Amigos</p>');
    */

    // Send the data from the html file in the Files folder
    // Read the data from the file and send it
    fs.readFile('./Files/index.html', (err, data) =>{ // Read the file
        if(err){ // Check if there is any error
            console.log(err);
            res.end(); // End the respond so that the website does not stay hanging
        }else{// Send the data since no error is present
            // res.write(data);
            /* If there is only one line before 'res.end()' we can also write like this */
            res.end(data);
        }
    })

    // End the response
    // res.end();
});

server.listen(3000, 'localhost', () =>{
    console.log('Listening for requests on port 3000');
})