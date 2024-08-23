import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Link } from 'react-router-dom'

const Product = () => {
  // 104 rotas dinamicas
  const { id } = useParams()

  //105 carregamento de dado individual 
  const url = 'http://localhost:3000/products/' + id
  const { data: product, loading, error } = useFetch(url)

  //console.log(product)
  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price} €</p>
          {/* 106 Nested routers  */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}

    </>
  )
}

export default Product
