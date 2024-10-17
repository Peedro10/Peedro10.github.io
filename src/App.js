import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Vous pouvez ajouter d'autres routes ici si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
