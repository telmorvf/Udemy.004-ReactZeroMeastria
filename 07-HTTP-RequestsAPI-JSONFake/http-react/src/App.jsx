// CSS
import './App.css'

// hooks
import { useState, useEffect } from 'react'

// 092. - Create custom hooks file: ./hooks/useFetch.jsx
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 092. - Create custom hooks
  const { data: items, httpConfig } = useFetch(url) // rename: data to items
  //console.log('setFetch: ', data)

  //= 089. fetch data from api "react nativ" = 
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }
    fetchData()
  }, []);

  // = 090. adicionando dados com react = 
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    /// 093. Reformulando POST - Já tenho os dados no meu hook personalizado (// pelo 93)
    // envia dados para api
    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', },
    //   body: JSON.stringify(product),
    // })

    // = 091. fetch data from api Dinamico Último resultado só= (// pelo 93)
    // recebe o network response
    // const addedProducts = await res.json()
    // setProducts((prevProducts) => [...prevProducts, addedProducts])

    httpConfig(product, 'POST')
    setName('')
    setPrice('')

  }


  return (

    <div className="App">

      <h3>= 089. fetch data from api "react nativ" = </h3>
      <h4>Lista de produtos</h4>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} €
          </li>
        ))}
      </ul>

      <div className="new-class">
        <h3>= 090. adicionando dados com react = </h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Price:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} required />
          </label>
          <input type="submit" value="Criar produto" />
        </form>
      </div>

      <h3>= 091. fetch data from api Dinamico = </h3>
      <h5> Ver código, como é utualizado o ecrã com base no retorno do último POST</h5>
      <div className="new-class"></div>

      <h3>= 092. - Create custom hooks= </h3>
      <h4>Lista de produtos</h4>
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} €
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
