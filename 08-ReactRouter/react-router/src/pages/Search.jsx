import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {

  const [searchParams] = useSearchParams()
  let url = "http://localhost:3000/products?" + (searchParams)
  //console.log(searchParams)
  //debugger
  //url = "http://localhost:3000/products?id=1"
  //url = "http://localhost:3000/products?name=cadeira"
  //url = "http://localhost:3000/products?name=cadeira&id=3"
  //url = "http://localhost:3000/products?query=cadeira"\
  //console.log(url)
  const { data: items, loading, error } = useFetch(url)

  return (
    <div>
      <h1>Resultados disponíveis</h1>

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

export default Search
