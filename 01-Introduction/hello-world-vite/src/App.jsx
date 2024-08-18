import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello-World Vite</h1>
      
      <p>Esta aplicação consite no 1º exercício do curso de:</p><br/>
      <p>React do zero à Mestria</p><br/>
      <p>Professor: Matheus Battisti</p>
    </div>
  )
}

export default App
