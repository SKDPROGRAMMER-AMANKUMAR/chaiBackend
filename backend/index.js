import express from 'express'; 
const app = express(); //Here app variable contains "express" , it means the app has all power and features and functionality of express() 
const port = process.env.PORT || 3000; 
/*
const port = process.env.PORT || 3000; 
process.env.PORT: Checks if the port is provided via an environment variable (like from a .env file or deployment platform).

Fallback to 3000: If no port is specified, it defaults to 3000.
Best Practice: Using process.env.PORT is preferred in production since cloud providers (like Heroku) assign ports dynamically.

This ensures the server runs on the correct port during deployment while providing a local fallback during development.
*/
app.get('/',(req,res)=>{
    res.send('Server is ready')
})

// get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {id:1,
         title: 'A joke',
         content: 'This is a joke'   
        },
        {id:2,
         title:'Another joke',
         content:'This is anoter joke'   
        },
        {
            id:3,
            title:'A third joke',
            content: 'This is a third joke'
        },
        {
            id:4,
            title:'A fourth joke',
            content: 'This is a fourth joke'
        },
        {
            id:5,
            title:'A fifth joke',
            content: 'This is a fifth joke'
        }
    ];
    res.send(jokes)
})

app.listen(port, ()=>{
    console.log(`Server is at http://localhost:${port}`);
})