import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(true);
  const [name, setName] = useState('Telmo');

  return (
    <div>
      <h3>Isso será exibido?</h3>
      {console.log(x)}
      {x && (<p>Se x for true, sim é true!</p>)}
      {!x && (<p>Se x for false, sim é false!</p>)}

      <h3>Operador Ternário</h3>
      {
        name === 'João' ?
          (
            <div>
              <p>O nome é João</p>
            </div>
          ) :
          (
            <div>
              <p>Nome não encontrado</p>
            </div>
          )
      }
      <button onClick={() => name === 'Telmo' ? setName('João') : setName('Telmo')}>
        Altera o nome
      </button>
    </div>
  )
}

export default ConditionalRender
