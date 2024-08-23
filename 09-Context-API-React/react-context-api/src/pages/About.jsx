// 117 reformulando context com um hook
// Products.jsx fica com a versão ainda por reformular
//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'
import { useCounterContext } from '../hooks/useCounterContext'

import { useTitleColorContext } from '../hooks/useTitleColorContext'


const About = () => {
  // 117 reformulando context com um hook
  // Products.jsx fica com a versão ainda por reformular
  //const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext()

  // 118 context mais complexo
  // pagina New fica sem aplicar o STYLE do hook
  const { color } = useTitleColorContext()


  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About
