const Events = () => {

  const handleMyEvent = (event) => {
    console.log(event)
    console.log('1. Ativou o Event Click')
  }

  const rederSomething = (x) => {
    if (x) {
      return <h2 style={{ color: 'green' }}>Render screen se x for verdadeiro</h2>
    } else {
      return <h2 style={{ color: 'red' }}>Ou Render screen se x for diferente de verdadeiro</h2>
    }
  };

  return (
    <div>

      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>

      <div>
        <button onClick={() => console.log('2. Clicou na função!')}>
          Clique aqui também!</button>
      </div>

      <div>
        <button onClick={() => {
          if (true) {
            console.log('3. Esta função complexa dentro do button não deveria de existir')
          }
        }}>
          Clique aqui, depois!
        </button>
      </div>
      {rederSomething(true)}
      {rederSomething(false)}
    </div>

  );
};
export default Events;