import { useState } from "react";

const ManageData = () => {
  let someData = 10;
  console.log(someData)

  const [number, setNumber] = useState(15);
  console.log(number)

  return (
    <div>
      <div>
        <p>Com variável - Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar valor variável</button>
      </div>
      <div>
        <p>Com useState - Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar valor useState</button>
      </div>
    </div>
  )
}

export default ManageData
