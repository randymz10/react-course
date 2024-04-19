import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleImage(e) {
    setImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID9();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input type="text" value={name} onChange={handleName} />

      <label>Image URL</label>
      <input type="text" value={image} onChange={handleImage} />

      <Button>Add</Button>
    </form>
  );
}

FormAddFriend.propTypes = {
  onAddFriend: PropTypes.func,
};

export default FormAddFriend;
