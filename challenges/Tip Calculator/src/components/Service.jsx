import PropTypes from "prop-types";
import SelectorService from "./SelectorService";

function Service({ text }) {
  return (
    <div>
      <span>{text}</span>
      <div>
      <SelectorService />
      </div>
    </div>
  );
}

Service.propTypes = {
  text: PropTypes.string,
};

export default Service;
