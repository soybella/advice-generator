import React, { useState } from "react";
import iconDice from "./images/icon-dice.svg";
import patternDividerDesktop from "./images/pattern-divider-desktop.svg";
import axios from "axios";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  let [results, setResults] = useState();
  let [adviceId, setAdviceId] = useState();
  let [isLoaded, setIsLoaded] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    let apiUrl = `https://api.adviceslip.com/advice`;
    axios.get(apiUrl).then(handleClickResponse);
  }

  function handleClickResponse(response) {
    setResults(response.data.slip.advice);
    setAdviceId(`Advice #${response.data.slip.id}`);
  }

  function handleLoad() {
    setIsLoaded(true);
    setResults("Roll the dice below");
    setAdviceId("Advice Generator");
  }

  if (isLoaded) {
    return (
      <div className="App">
        <div className="App-header">
          <section className="container">
            <p className="container advice-number"> {adviceId} </p>
            <h4 className="container advice-container">{results}</h4>
            <div>
              <img
                src={patternDividerDesktop}
                alt="SVG pattern divider"
                className="pattern-divider"
              />
            </div>
            <div className="icon-dice-container" onClick={handleClick}>
              <button className="icon-sphere">
                <img src={iconDice} alt="SVG icon dice" className="icon-dice" />
              </button>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  } else {
    handleLoad();
  }
}

export default App;
