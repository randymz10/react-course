import PropTypes from "prop-types";
import Friend from "./Friend";

function FriendsList({ friends }) {
  

  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array,
};

export default FriendsList;
