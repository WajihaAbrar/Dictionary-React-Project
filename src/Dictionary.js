import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.word);
  let [apiResults, setApiResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function searchWord() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setApiResults(response.data[0]);
  }

  function load() {
    setLoaded(true);
    searchWord();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeyword}
              defaultValue={props.word}
            />
          </form>
          <div className="hint">
            suggested words: sunset, forest, baking, garden, yoga.....
          </div>
        </section>
        <Results results={apiResults} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

export default Dictionary;
