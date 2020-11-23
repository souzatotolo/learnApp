import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function Header() {
 return (
  <header className="App-header">
  <ul>
    <li><AnchorLink href="#home">Home</AnchorLink></li>
    <li><AnchorLink href="#about">About</AnchorLink></li>
    <li><AnchorLink href="#classes">Classes</AnchorLink></li>
    <li><AnchorLink href="#contact">Contact</AnchorLink></li>
  </ul>
  <button className="headerBtn">Get Started</button>
</header>
 );
}