import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import HomePage from './Pages/Home/HomePage.jsx';
import Development from './Pages/Development/Development.jsx';
import Photography from './Pages/Photography/Photography.jsx';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/development' element={<Development />} />
      <Route path='/photography' element={<Photography />} />
    </Routes>
  </Router>
  );
}

export default App;
