import React from 'react';
import './App.css';
import Header from './components/header'
import learn from './assets/learn.png'
import About from './pages/about'
import Classes from './pages/classes'
import Contact from './pages/contact'
import AnchorLink from 'react-anchor-link-smooth-scroll'


function App() {
  return (
    <div id= "home"className="App">
    <Header/>
    

    <main className="container">
    <div className="containerText">
    <h1>Learn From Anywhere</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur nihil </p>
    <AnchorLink href="#classes"><button className="headerBtn">Get Started</button></AnchorLink>
    </div>
    <img src={learn} alt="learn" className="learnImg"/>    

    </main>
    <About/>
    <Classes/>
    <Contact/>
    </div>


  );
}

export default App;
