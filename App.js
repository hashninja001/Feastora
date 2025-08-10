import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplinePage from './SplinePage';

import MainApp from './MainApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplinePage />} />
        <Route path="/app" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
