// install express for us to run this project
// express allows us to create end-points to listen for incoming requests

// implies that the code written here uses strict rules
"use strict";

const express = require("express");     // import express

// constants
const PORT = 8765;                      // port address that the app is listening for
const HOST = "127.0.0.1";               // default, https://127.0.0.1:8080 == https://localhost:8080
const OS = require("os");               // import the os environment
const ENV = "DEV";                      // specify that this project is under development

// app

const app = express();                  // invoke the express library
app.get("/", (request, response)=>{     // listen for get request: http://127.0.0.1/, for the root of the site, callback function processes the request
    response.statusCode = 200;          // return 200 status code === SUCCESS
    const msg = "Hello FSD learners";   // create response message
    response.send(msg);
});

app.get("/test", (request, response)=>{ // listen for get request: https://127.0.0.1/test
    response.statusCode = 200;
    const msg = "Hello from /test Node!";
    response.send(msg);
});

app.listen(PORT, HOST);                 // invoke the listen() method for app, listen to port: 8080, host: 127.0.0.1
console.log(`Running on http://${HOST}:${PORT}`); // log the start of the app to listen for requests