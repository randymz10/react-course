import Bill from "./Bill";
import Service from "./Service";

function App() {
  return (
    <>
    <div className="vh-100 container d-flex flex-column justify-content-center align-items-center">
    <div className="w-30">
      <Bill />
      <Service text="How did you like the service?" />
      <Service text="How did your friend like the service?" />
    </div>
      <button className="btn btn-dark mt-3">Reset</button>
    </div>
    </>
  );
}

export default App;
