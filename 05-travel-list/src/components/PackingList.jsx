import PropTypes from "prop-types";
import Item from "./Item";

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

PackingList.propTypes = {
  items: PropTypes.array,
};

export default PackingList;
