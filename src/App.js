import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <div className="footer">
          <a
            href="https://github.com/NatKalyna/react-weather"
            rel="noreferrer"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Natalia Kalenska 💙💛
        </div>
      </header>
    </div>
  );
}

export default App;
