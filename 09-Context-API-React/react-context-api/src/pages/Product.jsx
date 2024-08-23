import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Product = () => {
  // 104 rotas dinamicas
  const { id } = useParams()

  //105 carregamento de dado individual 
  const url = 'http://localhost:3000/products/' + id
  const { data: product, loading, error } = useFetch(url)

  const { counter } = useContext(CounterContext)

  return (
    <>
      <h4>Contado: useContext'CounterContext'</h4>
      <p>Valor do contador: {counter}</p>

      <br />
      <h1>Produto</h1>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h3>{product.name}</h3>
          <p>{product.price} €</p>
          {/* 106 Nested routers  */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}

    </>
  )
}

export default Product
