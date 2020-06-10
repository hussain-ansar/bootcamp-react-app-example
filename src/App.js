import React from 'react';
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
      <Dinner dishName="Beef Karahi" sweetDish="Kheer"/>
      <hr/>
      <Dinner dishName="Beef Kofta" sweetDish="Halva"/>
      <hr/>
      <Dinner dishName="Chicken Karahi" sweetDish="Gajer ka Halva"/>
    </div>
  );
}

export default App;
