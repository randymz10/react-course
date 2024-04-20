import PropTypes from "prop-types";
import Friend from "./Friend";

function FriendsList({ friends, selectedFriend, onSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array,
  selectedFriend: PropTypes.object,
  onSelection: PropTypes.func,
};

export default FriendsList;
