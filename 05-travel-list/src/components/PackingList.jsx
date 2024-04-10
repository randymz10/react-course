import PropTypes from "prop-types";
import Item from "./Item.jsx";

function PackingList({ items, onDeleteItem, onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems}/>
        ))}
      </ul>
    </div>
  );
}

PackingList.propTypes = {
  items: PropTypes.array,
  onDeleteItem: PropTypes.func,
  onToggleItems: PropTypes.func
};

export default PackingList;
