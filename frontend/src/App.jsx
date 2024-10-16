import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
// import { response } from 'express'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes') //for proper explanation of this like see in "vite.config.js" file
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }) //in this case we don't need any dependency array , cuase we want that as the web page get reload(mount) , the jokes should display. 
  return (
    <>
      <h1>Chai aur full Stack || youtube</h1>
      <p>JOKES: {jokes.length}</p>

      { // here we open this curly braces to write javascript not for object.
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
