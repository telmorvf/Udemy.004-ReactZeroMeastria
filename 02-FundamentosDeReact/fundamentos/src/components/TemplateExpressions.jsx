const TemplateExpressions = () => {
  const name = 'Telmo'
  const data = {
    age: 31,
    job: 'Programer'
  };

  return (
    <div>
      <h1>Olá {name}, estás bom?</h1>
      <p>Você trabalha como: {data.job} desde os seu {data.age} anos de idade.</p>
      <p>{4 + 4 + 1}</p>
      <p>{console.log('JSX React')}</p>
    </div>
  );
};

export default TemplateExpressions;