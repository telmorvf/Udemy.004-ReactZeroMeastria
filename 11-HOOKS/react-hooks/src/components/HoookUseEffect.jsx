import { useEffect, useState } from 'react'

const HoookUseEffect = () => {
  // 168 useEffects, sem dependencias
  useEffect(() => {
    //console.log('useEffects, sem dependencias: estou a ser executado')
  })

  const [number, setNumber] = useState(1)
  const changeSomething = () => {
    setNumber(number + 1)
  }

  // 169 useEffects, sem dependencias vazio
  useEffect(() => {
    //console.log('executado só quando []')
  }, [])


  // 170 useEffects, só executa quando algum valor específico é alterado
  // item no array de dependencias
  const [anotherNumber, setAnotherNumber] = useState(0)
  useEffect(() => {
    if (anotherNumber > 0) {
      //console.log('executado apenhas [anotherNumber]')
    }
  }, [anotherNumber])

  // 171 cleanup do useEffect
  // Comentado para nãp atrapalhar exercicios futuros
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('Hello World')
  //     setAnotherNumber(anotherNumber + 1) 
  //   }, 2000)
  //   return () => clearTimeout(timer)
  // }, [anotherNumber])

  return (
    <div>
      {/* 166 useEffect */}
      <hr />
      <h2>168 UseEffect - sem array de dependencias</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Mudar number</button>
      <p>Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>
    </div>
  )
}

export default HoookUseEffect