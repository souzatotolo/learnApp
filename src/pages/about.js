import React from 'react';

export default function About() {
  return (
    <div >
      <div id="about" style={{ background: '#fff', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '3.5em', marginLeft: 400, marginBottom: 200, fontWeight: 'bold' }}>Some information</p>
        <p style={{ fontSize: '2em', padding: 100, color: '#000', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis felis at justo elementum.
      quis volutpat neque ultrices. Etiam sit amet mi sit amet nibh consequat maximus.</p>
      </div>
    </div>
  );
}
