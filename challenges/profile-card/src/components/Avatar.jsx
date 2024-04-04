import "./Avatar.css";

// eslint-disable-next-line react/prop-types
function Avatar({ imagePath, name }) {
  return (
    <div className="avatar">
      <img src={imagePath} alt={name}/>
    </div>
  );
}

export default Avatar;
