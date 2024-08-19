const UserDetails = ({ name, age, job, carta }) => {
  return (
    <div>
      <ul>
        <li>Nome:    {name}</li>
        <li>Idade:   {age}</li>
        <li>Emprego: {job}</li>
        <li>Carta:   {carta ? ('Sim') :
          (age >= 18 ? ('Pode tirar carta') : 'Não pode tirar carta')}</li>
      </ul>
    </div>
  );
};

export default UserDetails;
