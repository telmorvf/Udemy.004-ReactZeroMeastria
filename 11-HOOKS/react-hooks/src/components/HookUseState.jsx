import { useState } from 'react'

const HookUseState = () => {
  // 164 useState: usado para quando necessitamos de alterar um valor e renderizar o componente para que esse valor seja exiido valor no ecrã
  let userName = 'João'
  const [name, setName] = useState('Telmo')
  //console.log('164 useState: ', userName)
  //console.log('164 useState: ', name)

  const changeNames = () => {
    userName = 'João Sousa'
    setName('Telmo Fernandes')
  }

  // 165 useState e input:
  const [age, setAge] = useState(49)

  const handleSubmit = (e) => {
    e.preventDefault()
    // envio a uma API dos dados2
    //console.log(age)
  }


  return (

    <div>
      {/* 164 useState */}
      <hr />
      <h2>164 Hook UseStat</h2>
      <p>Variável: {userName}</p>
      <p>useSatae: {name}</p>
      <button onClick={changeNames}>Mudar os Nomes!</button>
      <hr />

      {/* 165 useState e input: */}
      <hr />
      <h2>165 Hook UseStat e Input</h2>
      <form onSubmit={handleSubmit}>
        Digite a sua idade:
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="submit" value='Enviado idade server via API' />
      </form>
      <p>O {name} tem {age} anos!</p>
      <hr />

    </div>
  )
}

export default HookUseState
