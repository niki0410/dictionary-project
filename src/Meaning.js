import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if(props.meaning.definition && !props.meaning.example && props.meaning.synonyms){
    return(
      <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition:</strong>
          {props.meaning.definition}
          <br />
        </p>
        <strong>Synonyms:</strong>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
    )
  }
  if(props.meaning.definition && props.meaning.example && !props.meaning.synonyms){
    return(
      <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition:</strong>
          {props.meaning.definition}
          <br />
          <strong>Example:</strong>
          <em>{props.meaning.example}</em>
        </p>
      </div>
    </div>
    )
  }
  if(props.meaning.definition && !props.meaning.example && !props.meaning.synonyms){
    return(
      <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition:</strong>
          {props.meaning.definition}
        </p>
      </div>
    </div>
    )
  }
  if(props.meaning.definition && props.meaning.example && props.meaning.synonyms){
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition:</strong>
          {props.meaning.definition}
          <br />
          <strong>Example:</strong>
          <em>{props.meaning.example}</em>
          <br />
        </p>
        <strong>Synonyms:</strong>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
}
