const Challenge = () => {
  const a = 12
  const b = 3

  return (
    <div>
      <h1>Tarefa 2 - conceitos básicos de React</h1>
      <h2>O valor de a: {a}, valor de b: {b}.</h2>

      <button onClick={() => {
        console.log('valor a: ', a, 'valor b: ', b, ' = ', a + b)
      }}>
        Soma {a} + {b} =
      </button>
    </div>
  );
};
export default Challenge;