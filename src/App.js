import React, { useState } from "react";
import iconDice from "./images/icon-dice.svg";
import patternDivider from "./images/pattern-divider-desktop.svg";
import "./App.css";
import axios from "axios";

function App() {
  // Make the icon dice a button to randomize advice
  let [results, setResults] = useState();
  let [adviceId, setAdviceId] = useState();
  // let [placeholder, setPlaceholder] = useState("test");

  function handleClick(event) {
    event.preventDefault();
    // let apiKey = "aeb70a31839f16b6t1e99ad4f4bo55e4";
    let apiUrl = `https://api.adviceslip.com/advice`;
    axios.get(apiUrl).then(handleClickResponse);
  }

  function handleClickResponse(response) {
    setResults(response.data.slip.advice);
    // console.log(response.data);
    setAdviceId(response.data.slip.id);
    // console.log(adviceId);
  }

  // function advicePlaceholder() {
  //   if (results.length) {
  //     ;
  //   } else {
  //     return "test2";
  //   }
  // }

  // import React, { useState } from "react";
  // import "./Dictionary.css";
  // import Results from "./Results";
  // import Photos from "./Photos";
  // import axios from "axios";

  // export default function Dictionary(props) {
  //   let [keyword, setKeyword] = useState(props.defaultKeyword);
  //   let [results, setResults] = useState(null);
  //   let [loaded, setLoaded] = useState(false);
  //   let [photos, setPhotos] = useState(null);

  //   function handleDictionaryResponse(response) {
  //     setResults(response.data);
  //   }

  //   function handleImagesResponse(response) {
  //     setPhotos(response.data.photos);
  //   }

  //   function search() {
  //     let apiKey = "aeb70a31839f16b6t1e99ad4f4bo55e4";
  //     let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  //     axios.get(apiUrl).then(handleDictionaryResponse);

  //     let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
  //     axios.get(imagesApiUrl).then(handleImagesResponse);
  //   }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     search();
  //   }

  //   function handleKeywordChange(event) {
  //     setKeyword(event.target.value);
  //   }

  //   function load() {
  //     setLoaded(true);
  //     search();
  //   }

  //   if (loaded) {
  //     return (
  //       <div className="Dictionary">
  //         <form onSubmit={handleSubmit}>
  //           <input
  //             type="search"
  //             placeholder="Ex: wine, sunset.."
  //             onChange={handleKeywordChange}
  //           />
  //         </form>
  //         <Results results={results} />
  //         <Photos photos={photos} />
  //       </div>
  //     );
  //   } else {
  //     load();
  //     return "Loading...";
  //   }
  // }

  return (
    <div className="App">
      <div className="App-header">
        <section className="container">
          <p className="container advice-number"> Advice #{adviceId} </p>
          <h4 className="container advice-container">{results}</h4>
          <div>
            <img
              src={patternDivider}
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
      </div>
    </div>
  );
}

export default App;
