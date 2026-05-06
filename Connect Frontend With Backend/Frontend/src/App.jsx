import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

 
  useEffect(() => { //Handeling api with axios
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  })

  //Just Writing this code won't connect it with beackend , this will give CORS error
  //   CORS (Cross-Origin Resource Sharing) is a browser security mechanism that blocks requests made from one origin to a different origin — unless the server explicitly allows it.
  // What is an "Origin"?
  // An origin is the combination of protocol + domain + port:
  //CORS error solved in vite.config.js through proxy

  return (
    <>
      <h1>Learning To connect Backend with Frontend</h1>
      <p>JOKES: {jokes.length}</p>

      {
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
