import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "Lisbon" };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather() {
    console.log("Loading...");
    console.log(this);
  }

  render() {
    return (
      <div className="app">
        <h1>Classy Wheather</h1>
        <div>
          <input
            type="text"
            placeholder="Search from location...."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button onClick={this.fetchWeather}>Get Wheather</button>
      </div>
    );
  }
}

export default App;
