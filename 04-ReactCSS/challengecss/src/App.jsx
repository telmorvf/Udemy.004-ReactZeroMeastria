import Cars from './components/Cars'
import './App.css'

function App() {
  const cars = [
    { id: 1, brand: 'Fiat', model: 'Uno', color: 'Vermelho' },
    { id: 2, brand: 'Nissan', model: 'Leaf', color: 'Branco' },
    { id: 3, brand: 'Renault', model: 'Scenic', color: 'Preto' },
    { id: 4, brand: 'Fiat', model: 'Palio', color: 'Cinzento' },
  ]

  return (

    <div className="App">
      <h1>Showroom de carros</h1>
      <div className='car-container'>
        {cars.map((car) => (
          <Cars key={car.id} car={car} />
        ))}
      </div>

    </div>
  )
}

export default App
