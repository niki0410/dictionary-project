import React from "react";
import "./Synonym.css"

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        <li> {props.synonyms}</li>
      </ul>
    );
  } else {
    return null;
  }
}
