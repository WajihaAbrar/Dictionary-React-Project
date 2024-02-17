import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function searchWord(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
        <input type="search" onChange={handleKeyword} />
      </form>
    </div>
  );
}

export default Dictionary;
