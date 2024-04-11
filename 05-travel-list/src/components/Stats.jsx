import PropTypes from "prop-types";

function Stats({ items }) {
  if(!items.length) return (<p className='Stats'><em>Start adding some item to you packing list</em></p>)
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>{percentage === 100 ? 'You got everything! Ready to go':  `You have ${numItems} item on your list, and yu already packed ${numPacked} ${percentage}%`}</em>
    </footer>
  );
}

Stats.propTypes = {
  items: PropTypes.array,
};

export default Stats;
