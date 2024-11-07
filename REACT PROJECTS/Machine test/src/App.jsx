import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Lazy load the components
const Home = lazy(() => import('./pages/Home'));
 const Contact = lazy(() => import('./pages/Contact'));
 const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={{ padding: '10px', background: '#282c34', color: 'white' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ display: 'inline', margin: '0 10px' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            </li>
            <li style={{ display: 'inline', margin: '0 10px' }}>
              <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
            </li>
            <li style={{ display: 'inline', margin: '0 10px' }}>
              <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
            </li>
          </ul>
        </nav>
        {/* Lazy-loaded Routes */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </Router> 
  );
}

export default App;