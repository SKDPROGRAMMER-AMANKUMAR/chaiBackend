import express from "express"
// import { Hospital } from "./models/Hospital";
const app = express()
const port  = process.env.PORT||3000

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h1> We are going to learn about data modeling and rest of the things by doing it practically </h1>')
})

app.get('/hospital',(req,res)=>{

    /* Here in this case when you use array so in this case you've to use {res.json() not res.send()}, cause the reason is that the res.json() , will access as an API from frontent , this is the reason  */
    const hospital = [
        {
            id:1,
            name:"City Hospital",
            location:"New York",
            capacity:100,
            services:['Emergency','Pediatrics']
        },
        {
            id:2,
            name:'Country Hospital',
            location:'Los Angeles',
            capacity:150,
            services:['Emergency','Cardiology']
        },
    ];
    res.json(hospital) /* when to use res.json():
    Used to send JSON objects or arrays.
    Automatically sets the Content-Type header to application/json.
    Best suited for APIs since it ensures the frontend or clients receive the data in proper JSON format. */
})

/* When to Use res.json() vs res.send()

Use Case	               Use res.json()	                        Use res.send()

Sending JSON data	        Yes	Possible,                         but not recommended
Sending HTML or text	        No	                                     Yes
Handling API responses	Preferred for consistency	             Can be used, but not ideal
Arrays or complex data	Yes (guarantees correct JSON parsing)	 No (inconsistent behavior possible)

 */

app.get('/hospital/:id',(req,res)=>{
    const hospitalid = req.params.id;
    res.send(`Get Hospital id:${hospitalid}`)
})

//when to use res.send():
/* Can send any type of response (HTML, text, buffers, or objects).
If used with an object, it implicitly converts the object to JSON, but it’s not the preferred way for APIs.
Doesn't set Content-Type automatically to application/json unless it detects a JSON object, which might cause inconsistencies. */

app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})  

/*
Yes, exactly! Here's the short version:

Use res.json(): When sending arrays or objects (especially for APIs).
Use res.send(): When sending text, HTML, or other non-JSON responses.
This ensures consistent behavior and proper data formatting for APIs.
*/