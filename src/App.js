import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Welcome to GradX Abroad</h2>;
}

function Apply() {
  return (
    <h2>
      <a href="https://forms.gle/YOUR_FORM_LINK" target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </h2>
  );
}

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>GradX Abroad</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/apply">Apply</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;