import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    
      <header className="vans-header">
        <Link to="/" className="vanlife-label">#VANLIFE</Link>
        <section className="vans-navbar">
          <Link to="/about" className="about-label" >About</Link>
          <Link to="/vans" className="vans-label"  >Vans</Link>
        </section>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />}/>
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