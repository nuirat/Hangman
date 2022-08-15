import logo from './logo.svg';
import './App.css';
import Score from './components/score';
import Word from './components/word';
import Letter from './components/letters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Score/>
       <Word/>
       <Letter/>
      </header>
    </div>
  );
}

export default App;
