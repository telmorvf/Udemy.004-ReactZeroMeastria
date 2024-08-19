import { useState } from 'react';
import './App.css'
import MyComponent from './componentes/MyComponent'
import Title from './componentes/Title'
import styles1 from './componentes/Title.module.css'

function App() {
  const n = 15;
  const [name] = useState('Telmo')

  const redTitle = true;

  return (
    <div className="App">
      <h1>= 052. CSS Global index.css =</h1>
      <h2>React com CSS</h2>

      <h1>= 053. CSS de componentes =</h1>
      <MyComponent />
      <p>Este pagragrafo é do App.jsx</p>

      <h1>= 054. CSS inline =</h1>
      <p style={{ color: 'blue', padding: '25px', borderTop: '2px solid red' }}>
        Este elemento foi estilizado de forma inline
      </p>

      <h1>= 055. CSS inline dinâmico =</h1>
      <h3 style={n < 10 ? ({ color: 'purple' }) : ({ color: 'pink' })}>
        CSS como texto
      </h3>
      <h3 style={n > 10 ? ({ color: 'purple' }) : ({ color: 'pink' })}>
        CSS como texto
      </h3>

      <h3 style={name === 'Telmo' ? ({ color: 'green', backgroundColor: '#000' })
        : ({ color: 'pink' })}>
        Teste nome: Telmo
      </h3>
      <h3 style={name === 'Ricardo' ? ({ color: 'green', backgroundColor: '#000' })
        : ({ color: 'pink' })}>
        Teste nome: Ricardo
      </h3>

      <h1>= 056. Classes dinâmicas no CSS  =</h1>
      <h3 className={redTitle ? 'red-title' : 'title'}>
        Este título vai ter classe dinâmica
      </h3>
      <h3 className={redTitle ? 'title' : 'red-title'}>
        Este título vai ter classe dinâmica
      </h3>
      <h3 className='my_title'>teste 123</h3>


      <h1>= 057. CSS Modules =</h1>
      <Title />
      <Title />
      <h3 className={styles1.my_title}>teste Title.modules.css</h3>

    </div >

  )
}

export default App
