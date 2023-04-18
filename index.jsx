import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from "react"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {
  return (
    <BrowserRouter>
    
      <header className="vans-header">
        <Link to="/home" className="vanlife-label">#VANLIFE</Link>
        <section className="vans-navbar">
          <Link to="/about" className="about-label" >About</Link>
          <Link to="/vans" className="vans-label"  >Vans</Link>
        </section>
      </header>
      
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
      </Routes>
      
      <footer>
        <h4>Ⓒ 2022 #VANLIFE</h4>
      </footer>
      
    </BrowserRouter>
  )
}
function Home() {
  return (
    <div>
      <div className = "vans-body">
        <h1>You got the travel plans, we got the travel vans.</h1>
        
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        
        <h2>Find your van</h2>
      </div>
    </div>
  )
}
function About() {
  return (
    <div>
      <div className="about-body">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉)</p>
        
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        
        <section className="rental-section">
          <h3>Your destination is waiting. Your van is ready.</h3>
          <h2>Explore our vans</h2>
      </section>
      </div>
    </div>
  )
}
function Vans(){
  return(
    <div>
      <h2>Vans go here</h2>
    </div>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);