import express from 'express'
const app = express();
const port = 4000;

app.get('/hello',(req,res)=>{
    res.send('Hello world');
})

app.get('/',(req,res)=>{
    res.send('Welcome')
})

app.get('/login',(req,res)=>{
    res.send('<details><summary>Why Backend is Essential </summary><p>To make the web apps fully functional and reliable.</p> </details>')
})

app.get('/login/info',(req,res)=>{
    res.send('This is the server , from where you will learn about backend tecnology')
})

app.get('/login/info/json',(req,res)=>{
    res.send([{name:'Alice'},{name:'Bob'}]);
})

/*The app.get() method in Express.js is used to define a route handler for HTTP GET requests. Here’s how it works:

1. Route Definition: It specifies a path (like /, /users, etc.) that the server will respond to when a GET request is made.

2. Callback Function: It takes a callback function that runs whenever a request is made to that path. This function receives two parameters: the request (req) and response (res) objects.

3. Response Handling: Inside the callback, you can process the request (e.g., query parameters) and send back a response (like JSON data, HTML, or status codes) to the client.

Summary

Purpose: Handle GET requests at specified routes.

Parameters: URL path and a callback function.

Response: Send data or HTML back to the client.*/


app.get('/TimeTravel',(req,res)=>{
    res.send('<p>I have a date on <time datetime="2024-10-14 20:00">Valentines day</time>.</p>')
})

app.get('/timetravel/whatmonth',(req,res)=>{
    res.send('October')
})

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})    
/*The line " app.listen(port, () => { console.log(Server is running at port ${port}); }) "in an Express.js application does the following:

1. Starts the Server: It begins listening for incoming HTTP requests on the specified port.
2. Callback Execution: Once the server is running, it executes a callback function that logs a            message   to the console, confirming that the server is operational and indicating the port number.

In short, this line is essential for setting up the Express server and providing feedback about its status.*/