import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CppCourse from './pages/CppCourse';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cpp" element={<CppCourse />} />
    </Routes>
  );
}

export default App;
