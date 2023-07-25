import React from 'react';
import logo from './logo.svg';
import { Team1Counter } from './features/team1Counter/Team1Counter';
import './App.css';
import { Team2Counter } from './features/team2Counter/Team2Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="counter-container">
          <div className="team1-counter">
            <Team1Counter />
          </div>
          <div className="team2-counter">
            <Team2Counter />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

