import React, { useState } from 'react'

const State = () => {
    const [state ,setState] = useState("namasthe");

  return (
    
    <div>
      <h1>{state}</h1>
      <button onClick={()=> setState("Greetings") }>Translate to english  </button>
    </div>
  )
}

export default State
