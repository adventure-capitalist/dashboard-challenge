import React from 'react';
import logo from './logo.svg';
import Weather from './components/weather'
import Dashboard from './components/dashboard'
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Dashboard/>
      <footer>Made with <span className="heart">♥</span> by Ashley Mikkola 2020</footer>
    </div>
  );
}

export default App;
