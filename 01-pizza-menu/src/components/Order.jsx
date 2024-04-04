import PropTypes from 'prop-types'

function Order({ closeHour, openHour }) {
    return (
      <div className="order">
        <p>
          We&apos;re open from {openHour}:00 to {closeHour}:00. Come visit us or order
          online.
        </p>
        <button className="btn">Order</button>
      </div>
    );
  }

Order.propTypes = {
    closeHour: PropTypes.number,
    openHour: PropTypes.number
}

export default Order
