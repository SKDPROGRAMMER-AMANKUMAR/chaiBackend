# Steps to connect the MongoDB atlas to the backend Professionally for Production Grade applications.

#### <strong style="color:yellow"> Before we dive into the steps of connecting database to our backend always Remember these things that written below for production grade apps </strong>
Two important points about database connectivity: 

1. When connecting to databases, handling potential data-not-found scenarios is essential. Employ try/catch blocks or promises to manage errors or we can also use promises.(as we've done in Database.js file)

key to remember : ( wrap in try-catch )

2. Database operations involve latency, and traditional synchronous code can lead to blocking, where the program waits for the database query to complete before moving on. So, we should async/await which allows for non-blocking execution, enabling the program to continue with other tasks while waiting for the database response. 

key to remember :  ( always remember the database is in another continent, so use async await)

and the "nodemon" will not track the ".env "files , 

## step-1 Under ".env" file  do these things that shown below 
````javascript
PORT=8000 
MONGODB_URI=mongodb+srv://AMAN:AMANSKD143@cluster0.eb8rj.mongodb.net
````

## step-2 Under "constants.js" file do these things that shown below
````javascript
export const DB_NAME = "Tiktok"
````

## step-3 Your file structure should look like this 👇👇 for production grade
 ````javascript
 MongoDB_Connection_to_Backend/
│
├── node_modules/            # Dependencies installed via npm
│
├── public/                  # Static files served directly
│   └── temp/
│       └── .gitkeep         # Keeps the folder in version control
│
├── src/                     # Core backend logic
│   ├── controllers/         # Request handlers (business logic)
│   ├── db/                  # Database connection setup
│   │   └── Database.js      # MongoDB connection logic
│   ├── middlewares/         # Middleware for authentication/error handling
│   ├── models/              # Mongoose models (Schemas)
│   ├── routes/              # API route definitions
│   ├── utils/               # Helper functions (utilities)
│   ├── app.js               # Initializes express, middleware, and routes
│   ├── constants.js         # Global constants (status codes, config)
│   └── index.js             # Entry point, connects DB and starts server
│
├── .env                     # Environment variables (e.g., DB URI, API keys)
├── .gitignore               # Files/folders to ignore in version control
├── package-lock.json        # Exact dependency tree (auto-generated)
├── package.json             # Project configuration and dependencies
└── Readme.md                # Documentation for the project
 ````

## step-4: - Used two approaches to connect the database - 1. In Index(index.js) File, 2. In Seprate DB folder(under Database.js)

### In Index File

````javascript
//  The below  commented code is first method to connect with database professionaly for production grade  within index.js file 

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) //"process.env" helps access environment variables securely. //"mongoose.connect()" establishes a connection to the MongoDB server using the provided URI and database name.

        app.on("error",(error)=>{ //listens for errors in the app and runs the provided callback when an error occurs, allowing for proper error handling.
            console.log("ERROR: ",error);
            throw error
        })

        app.listen(process.env.port,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log("ERROR",error);
        throw err
    }
})()
````
### In Seprate DB folder(under Database.js)

````javascript
import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async() => {
   try {
    const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   console.log(`MONGODB Connected HOST:${ConnectionInstance.connection.host}`);
   } catch (error) {
    console.log('MongoDB connection Failed:',error);
    process.exit(1)
   }
}

export default connectDB
````
and then import [connectDB] in "index.js" file 👇👇
````javascript
import connectDB from "./db/Database.js";
import dotevn from "dotenv"
dotevn.config({
    path:'./env'
})
connectDB() 
// This second approach(DB folder) is modular and more structured , this will more preferable. 
````

## And after doing these steps your database will get connected to your backend . 