
const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h4>Detalhes do carro</h4>
      <ul>
        <li>Marca: {brand}</li>
        <li>Km:    {km}</li>
        <li>Cor:   {color}</li>
      </ul>
      {newCar && <p>Este carro é novo!</p>}
    </div>
  );
};

export default CarDetails
