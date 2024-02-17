import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [apiResults, setApiResults] = useState(null);

  function searchWord(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setApiResults(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
        <input type="search" onChange={handleKeyword} />
      </form>
      <Results results={apiResults} />
    </div>
  );
}

export default Dictionary;
