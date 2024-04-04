import PropTypes from 'prop-types';

function Pizza({ pizza }) {
  const { name, photoName, ingredients, price} = pizza;
  return (

    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}
Pizza.propTypes = {
  pizza: PropTypes.object
}
// Pizza.propTypes = {
//   photoName: PropTypes.string,
//   name: PropTypes.string,
//   ingredients: PropTypes.string,
//   price: PropTypes.number,
// };

export default Pizza;
