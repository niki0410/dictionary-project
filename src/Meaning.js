import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  if (
    props.meaning.definition &&
    !props.meaning.example &&
    props.meaning.synonyms
  ) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <div>
          <div className="definiton">{props.meaning.definition}</div>
          <div className="synonyms">
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        </div>
      </div>
    );
  }
  if (
    props.meaning.definition &&
    props.meaning.example &&
    !props.meaning.synonyms
  ) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <div>
          <div className="definiton">{props.meaning.definition}</div>
          <div className="example">{props.meaning.example}</div>
        </div>
      </div>
    );
  }
  if (
    props.meaning.definition &&
    !props.meaning.example &&
    !props.meaning.synonyms
  ) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <div>
          <div className="definiton">{props.meaning.definition}</div>
        </div>
      </div>
    );
  }
  if (
    props.meaning.definition &&
    props.meaning.example &&
    props.meaning.synonyms
  ) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <div>
          <div className="definiton">{props.meaning.definition}</div>
          <div className="example">{props.meaning.example}</div>
          <div className="synonyms">
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        </div>
      </div>
    );
  }
}
