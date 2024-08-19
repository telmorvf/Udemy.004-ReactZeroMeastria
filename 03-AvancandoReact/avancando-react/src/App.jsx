
import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowuserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = 'Telmo';
  const [userName] = useState('Maria');

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarelo', newCar: true, km: 0 },
    { id: 2, brand: 'Kia', color: 'Branco', newCar: false, km: 34343 },
    { id: 3, brand: 'Reanult', color: 'Azul', newCar: false, km: 234 },
  ]

  const pessoas = [
    { id: 1, name: 'Telmo', age: 49, job: 'Pedreiro', carta: true },
    { id: 2, name: 'Afonso', age: 15, job: 'Mestre', carta: false },
    { id: 3, name: 'Gonçalo', age: 18, job: 'Gestor', carta: false },
    { id: 4, name: 'André', age: 23, job: 'Técnico', carta: false },
  ]

  function showMessage() {
    console.log('Evento do componente pai!');
  };


  const [message, setMessage] = useState('inicio');
  const handleMessage = (msg) => {
    setMessage(msg);
  };


  return (

    < div className="App" >
      <h1>Avançando em React</h1>

      <h2>= Imagem em folder /public: =</h2>
      <div>
        <img src="/img1.jpg" alt="Paisagem por-do-sol" />
      </div>

      <h2>= Imagem em folder /assets: =</h2>
      <div>
        <img src={City} alt="Paisagem Cidade à noite" />
      </div>

      <h2>= Manage data =</h2>
      <ManageData />

      <h2>= List Render =</h2>
      <ListRender />

      <h2>= Conditional Render =</h2>
      <ConditionalRender />

      <h2>= props: =</h2>
      <ShowUserName name={userName} />

      <h2>= Destructuring: =</h2>
      <CarDetails brand='VW' km={100000} color='Azul' newCar={false} />

      <h2>= Reaproveitamento de Componentes: =</h2>
      <CarDetails brand='Ford' km={0} color='Vermelho' newCar={true} />
      <CarDetails brand='Fiat' km={54000} color='Branco' newCar={false} />

      <h2>= Loop de Array de objetos: =</h2>
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} newCar={car.newCar} km={car.km} />
      ))}

      <h2>= Fragment: =</h2>
      <Fragment propFragment='teste' />

      <h2>= Container prop children =</h2>
      <Container myValue='testing'>
        <p>Este conteúdo é meu</p>
      </Container>
      <Container myValue='testing 2'>
        <p>Testando o segundo container</p>
      </Container>

      <h2>= Executar Funções em props =</h2>
      <ExecuteFunction myFunction={showMessage} />

      <h2>= State Lift =</h2>
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      <h2>= Array de Pessoas - Tarefa 4 =</h2>
      {pessoas.map((p) => (
        <UserDetails key={p.id} name={p.name} age={p.age} job={p.job} carta={p.carta} />
      ))}
    </div >
  );
};
export default App
