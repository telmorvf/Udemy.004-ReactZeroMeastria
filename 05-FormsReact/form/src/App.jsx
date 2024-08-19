import './App.css'
import MyForm from './components/MyForm'

function App() {


  return (

    <div className="App">
      <h2>= Forms =</h2>
      <MyForm user={{
        name: 'Telmo',
        email: 'telmo@yopmail.com',
        bio: 'Sou programador',
        role: 'admin'
      }} />
    </div>
  )
}

export default App
