import styles from './Cars.module.css'

const Cars = ({ car }) => {
  return (
    <div className={styles.card}>
      <h1>{car.brand}</h1>
      <p>Modelo: {car.model}</p>
      <p>Cor: {car.color}</p>
    </div>
  );
};
export default Cars;
