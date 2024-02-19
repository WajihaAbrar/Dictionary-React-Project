import React from "react";

import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index}>
              <em>Synonyms:</em> {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}

export default Synonyms;
