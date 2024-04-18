import PropTypes from "prop-types";
import Friend from "./Friend";

function FriendsList({ friendsList }) {
  const friends = friendsList;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friendsList: PropTypes.array,
};

export default FriendsList;
