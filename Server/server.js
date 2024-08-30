
// Importing the http module
const http = require('http');

// Create a server

/*
The 'req' object contains information about the request made by the user
The 'res' object is used to send a response back to the user
*/
const server = http.createServer((req, res) =>{
    console.log('Request Made');
});

server.listen(3000, 'localhost', () =>{
    console.log('Listening for requests on port 3000');
})