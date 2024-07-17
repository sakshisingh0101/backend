import { useState,useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [jokes,setjokes]=useState([])
  

  useEffect(()=>{
   //proxy config file na sirf append hoga balki proxy lag jayegi ki yeh file yaha se aayi h
   //server ko lagega ki request same origin se aayi h to vo allow kar dega 
   axios.get('/api/jokes').then((response)=>{
    setjokes(response.data);
   }).catch((error)=>{
    console.log(error)
   })
  },[])

  return (
    <>
    <h1>Jokes</h1>
    <p>Total no. of jokes {jokes.length}</p>
    {jokes&&
      jokes.map((joke)=>(
        <div key={joke.id}>
          <h4>{joke.title}</h4>
          <p>{joke.content}</p>
        </div>
      ))
    }
    
    </>
  )
}

export default App
