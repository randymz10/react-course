import PropTypes from 'prop-types';

function Reset({onReset}) {
  return <button onClick={onReset}>Reset</button>;
}

Reset.propTypes = {
    onReset: PropTypes.func
}

export default Reset;
