import logo from "./logo.svg";
import "./App.css";
import Score from "./components/score";
import Solution from "./components/solution";
import Letters from "./components/letters";
import { Component } from "react";

class App extends Component {
  generateLetterStatuses() {
    let letterStatus = {};
   
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "ahmad",
        hint: "name",
      },
      score:100
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Score score={this.state.score}/>
          <Solution letterStatus={this.state.letterStatus}  solution={this.state.solution} />
          <Letters letterStatus={this.state.letterStatus} />
        </header>
      </div>
    );
  }
}

export default App;
