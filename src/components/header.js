import React from 'react';

export default function Header() {
 return (
  <header className="App-header">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Classes</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <button className="headerBtn">Get Started</button>
</header>
 );
}