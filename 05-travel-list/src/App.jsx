import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import data from "./data.js";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((item) => [...items, item]);
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} />
      <Stats />
    </>
  );
}

export default App;
