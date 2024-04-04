import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import SkillList from "./components/SkillList";
import data from "./data";

function App() {
  const { imagePath, intro, name, skills } = data;
  return (
    <div className="card">
      <Avatar imagePath={imagePath} name={name} />
      <div className="data">
        <Intro name={name} intro={intro} />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

export default App;
