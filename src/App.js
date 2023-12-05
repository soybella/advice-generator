import iconDice from "./images/icon-dice.svg";
import patternDivider from "./images/pattern-divider-desktop.svg";
import "./App.css";

function App() {
  console.log(patternDivider);
  return (
    <div className="App">
      <div className="App-header">
        <section className="container">
          <p className="container advice-number"> Advice #117 </p>
          <h4 className="container advice-container">
            "It is easy to sit up and take notice, what's difficult is getting
            up and taking action."
          </h4>
          <div>
            <img
              src={patternDivider}
              alt="SVG pattern divider"
              className="pattern-divider"
            />
          </div>
          <div className="icon-dice-container">
            <div className="icon-sphere">
              <img src={iconDice} alt="SVG icon dice" className="icon-dice" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
