import PropTypes from 'prop-types';

function Output({bill, tip}) {
  return <h3>You pay {bill + tip} (${bill} + ${tip} tip)</h3>;
}

Output.propTypes = {
    bill: PropTypes.number,
    tip: PropTypes.number
}

export default Output;
