import ListBox from "./ListBox/ListBox";
import WatchedBox from "./WatchedBox/WatchedBox";

function Main({ movies }) {
  return (
    <main className="main">
      <ListBox movies={movies}/>
      <WatchedBox />
    </main>
  );
}

export default Main;
