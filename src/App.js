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
          <Dictionary word="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            The project is coded by Wajiha Abrar and open-sourced on{" "}
            <a
              href="https://github.com/WajihaAbrar/Dictionary-React-Project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://my-dictionary-react-project.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
