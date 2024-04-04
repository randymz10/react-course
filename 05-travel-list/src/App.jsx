import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import data from "./data.js";

function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackingList items={data} />
      <Stats />
    </>
  );
}

export default App;
