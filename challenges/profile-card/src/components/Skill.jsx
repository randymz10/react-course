/* eslint-disable react/prop-types */
function Skill({ skillName, color, level }) {
  const styles = {
    backgroundColor: color,
  };
  

  return (
    <>
      {
        <div className="skill" style={styles}>
          <span>{skillName}</span>
          <span>
            {level === "beginner" && "👶"}
            {level === "intermediate" && "👍"}
            {level === "advanced" && "💪"}
          </span>
        </div>
      }
    </>
  );
}

export default Skill;
