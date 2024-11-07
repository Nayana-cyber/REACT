

import React, { useEffect } from 'react'

import axios from 'axios'
import { useState } from 'react';

function App() {

  const [data, setData] = useState([])
  useEffect(()=> {
    axios.delete('https://reqres.in/api/users/2', {
 
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <h2>axios</h2>
      {
      /*
        data.map((d, i) => {
          return <p key={i}>{d.email}</p>
        })*/
      } 
    </div>
  )
}

export default App
