import React from 'react';
import { Team1Counter } from './features/team1Counter/Team1Counter';
import './App.css';
import { Team2Counter } from './features/team2Counter/Team2Counter';

function App() {
  return (
    <div className="App">
        <div className="counter-container">
          <div className="team1-counter">
            <Team1Counter />
          </div>
          <div className="team2-counter">
            <Team2Counter />
          </div>
        </div>
    </div>
  );
}

export default App;


