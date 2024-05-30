import PropTypes from "prop-types";
import { useState } from "react";

function TextExpander({
  collapsedNumWords = 64,
  expandButtonText = "Show more",
  collapseButtonText = "Collapse text",
  buttonColor = "#000",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const collapseText = `${children.substring(0, collapsedNumWords)}...`;

  const styleCollapseButton = {
    color: buttonColor,
  };

  function handleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={className}>
      {isExpanded ? children : collapseText}
      <button style={styleCollapseButton} onClick={handleExpanded}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

export default TextExpander;

TextExpander.propTypes = {
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
  child: PropTypes.object,
};
