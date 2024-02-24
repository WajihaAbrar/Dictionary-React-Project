import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";
import "./Dictionary.css";

function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.word);
  let [apiResults, setApiResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function searchWord() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "e3AY6hHrGnz9Kx8M2NDLXCYRcTC4JktCpM6LGDho6g7czuuW6L44bj1Y";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleDictionaryResponse(response) {
    setApiResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}

export default Dictionary;
