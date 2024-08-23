import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import './Home.css'
import ChangeCounter from '../components/ChangeCounter'

// 117 reformulando context com um hook
// Products.jsx fica com a versão ainda por reformular
// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'
import { useCounterContext } from '../hooks/useCounterContext'

// 117 context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'


const Home = () => {
  // 103 carregamento de dados
  const url = 'http://localhost:3000/products'
  const { data: items, loading, error } = useFetch(url)

  // 117 reformulando context com um hook
  // Products.jsx fica com a versão ainda por reformular
  //const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext()

  // 118 context mais complexo
  const { color, dispatch } = useTitleColorContext()

  // 119 alterando state complexo
  const setTitleColor = (color) => (
    dispatch({ type: color })
  )

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />

      <h1 style={{ color: color }}>Produtos</h1>
      {/* 119 alterando state complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>

      {error && <p>{error}</p>}
      <ul className='products'>
        {items && items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price} € </p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Home