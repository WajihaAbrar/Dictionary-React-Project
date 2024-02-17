import Dictionary from "./Dictionary";
import dictionary from "./dictionary.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={dictionary}
            className="App-logo img-fluid"
            alt="Dictionary App Logo"
          />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Wajiha Abrar</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
