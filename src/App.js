import React from 'react';
import './App.css';
import Header from './components/header'
import learn from './assets/learn.png'

function App() {
  return (
    <div className="App">
    <Header/>
    

    <main className="container">
    <div className="containerText">
    <h1>Learn From Anywhere</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur nihil </p>
    <button className="headerBtn">Get Started</button>
    </div>
    <img src={learn} alt="learn" className="learnImg"/>    

    </main>    
    </div>


  );
}

export default App;
