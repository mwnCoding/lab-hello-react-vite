import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import ironhackLogo from './assets/ironhack-logo-xs.png'
import menuTop from './assets/menu-top-xs.png'



function App() {
  return (
    <div className='App'>
      <div id="top-panel">
        <div id="nav-bar">
          <img src={ironhackLogo} alt="small ironhack logo" />
          <img src={menuTop} alt="small top panel" />
        </div>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and becoma super Ninja developer.</p>
        <input type="button" value="Awesome!" className="top-panel-button" />
      </div>
      <div id="info-panel">
        <div className="image-container">
        <img src={icon1} alt="" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs</p>
        </div>

        <div className="image-container">
        <img src={icon2} alt="" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="image-container">
        <img src={icon3} alt="" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components.</p>
        </div>

        <div className="image-container">
        <img src={icon4} alt="" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App
