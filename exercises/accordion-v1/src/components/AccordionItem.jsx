import PropTypes from "prop-types";

function AccordionItem({ curOpen, onOpen, num, title, text }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

AccordionItem.propTypes = {
  curOpen: PropTypes.number,
  onOpen: PropTypes.func,
  num: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default AccordionItem;
