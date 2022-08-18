import logo from "./logo.svg";
import "./App.css";
import Score from "./components/score";
import Solution from "./components/solution";
import Letters from "./components/letters";
import { Component } from "react";
import EndGame from "./components/EndGame";

class App extends Component {
  generateLetterStatuses() {
    let letterStatus = {};

    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }
  selectLetter = (letter) => {
    let letters = this.state.letterStatus;
    letters[letter] = true;
    let checkWinner=this.state.solution.word.split('').filter(w=> letters[w])
    let isWinner=false
    if(checkWinner.length==this.state.solution.word.length)
    isWinner=true
    if (this.state.solution.word.indexOf(letter) == -1)
    {
      let isLost=false
      if(this.state.score - 20<=0)
      isLost=true
      this.setState({ letterStatus: letters, score: this.state.score - 20,isLost:isLost });
    }
      else
      this.setState({ letterStatus: letters, score: this.state.score +5,isWinner:isWinner});

  };
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: "AHMAD",
        hint: "name",
      },
      score: 100,
      isWinner:false,
      isLost:false,
      resetButton:'hide'
    };
  }
  restart=()=>
  {
    const chars =this.generateLetterStatuses()
    const newSloution={
      word:'FOOTBALL',
      hint:'sport'
    }
    const newScore=100
    const isWinner=false
    const isLost=false
    this.setState({score:newScore,isWinner:isWinner,isLost:isLost,letterStatus:chars,solution:newSloution})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.isWinner?<EndGame isWinner={true}/>:this.state.isLost? <EndGame isWinner={false} word={this.state.solution.word}/>:<Score score={this.state.score} />}
          <Solution
            letterStatus={this.state.letterStatus}
            solution={this.state.solution}
          />
          <Letters
            letterStatus={this.state.letterStatus}
            selectLetter={this.selectLetter}
          />
                    {this.state.isWinner?<button onClick={this.restart} >Restart</button>:this.state.isLost? <button onClick={this.restart} >Restart</button>: <span></span>}
          
        </header>
      </div>
    );
  }
}

export default App;
