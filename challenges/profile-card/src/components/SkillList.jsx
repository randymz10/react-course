/* eslint-disable react/prop-types */
import Skill from "./Skill";

function SkillList({ skills }) {
  console.log(skills);
  return (
    <>
      {skills.map((skill) => {
        return (
          <Skill
            key={skill.id}
            skillName={skill.skillName}
            color={skill.color}
            level={skill.level}
          />
        );
      })}
    </>
  );
}

export default SkillList;
