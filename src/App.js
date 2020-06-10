import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Dinner dishName="Beef Karahi" sweetDish="Kheer"/>
      <hr/>
      <Dinner dishName="Beef Kofta" sweetDish="Halva"/>
      <hr/>
      <Dinner dishName="Chicken Karahi" sweetDish="Gajer ka Halva"/>
      <hr/>
      <h1>ZoZo Bootcamp 2020</h1>
      <h2>Assignment 3 Complete</h2>
      <p>
          Hi <code>Im a Web Developer</code> and here Code practice.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ZoZo Bootcamp 2020
        </a>
      </header>
    </div>
  );
}

export default App;
