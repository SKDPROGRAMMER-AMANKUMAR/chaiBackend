import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [userdata, setUserdata] = useState([])

  useEffect(() => {
    axios.get('/api/UserData')
      .then((response) => setUserdata(response.data))
      .catch((error) => {
        console.log(error)
      });
  })

  return (
    <>
      <h1 className='font-serif sticky top-[0px] font-semibold text-[45px] bg-slate-400 text-cyan-400 border-black border-[2px] rounded-lg'>User's Data are Listed Below</h1>
      <p className='mt-6 inline-block p-[5px] rounded-lg cursor-pointer bg-yellow-400 text-purple-600 border-black border-[2px]'>User's Data: {userdata.length}</p>

      {
        userdata.map((user) => (
          <div className=' mt-3 flex flex-col rounded-lg  p-[10px] border-black border-[2px] space-x-2 ' key={user.id}>
            <h2 className='mt-2 text-slate-500'>Name:- {user.name}</h2>
            <h3 className='mt-2 text-orange-500'>age:- {user.age}</h3>
            <h4 className='mt-2 text-blue-600'>prefession:- {user.profession}</h4>
          </div>
        ))
      }
    </>
  )
}

export default App
