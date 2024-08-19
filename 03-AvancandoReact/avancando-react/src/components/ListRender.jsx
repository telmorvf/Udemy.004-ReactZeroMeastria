import { useState } from "react";

const ListRender = () => {

  const [list] = useState(['Telmo', 'Ricardo', 'Ana']);

  const [users, setUsers] = useState([
    { id: 1, name: 'Telmo', age: 33 },
    { id: 2, name: 'Ricardo', age: 44 },
    { id: 3, name: 'Valentim', age: 55 },
  ]);

  const deleteRandom = () => {
    console.log(users)

    const randomNumer = Math.floor(Math.random() * 3) + 1
    console.log('numbers between 1 and 3: ', randomNumer)

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumer !== user.id);
    });

  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>Nome: {user.name} - Idade: {user.age}.</li>
        ))}
      </ul>
      {console.log(users)}
      <button onClick={deleteRandom}>Apague um user aleatório</button>
    </div>
  );
};

export default ListRender;