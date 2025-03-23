import React, { useState } from "react";
import "./dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }
  function search() {
    let key = "fa0446ac26e348te439ef9o29e1713b2";
    let word = keyword;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search(); 
  }

  if(loaded){
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
        </form>
        <div className="hint">
          suggested words: sunset, book, forest...
        </div>
        </section>
        <Results results={results} />
      </div>
    );
  }else{
    load();
    return "Loading";
  }

  
}
