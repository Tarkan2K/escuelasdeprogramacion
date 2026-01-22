import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CppCourse from './pages/CppCourse';
import CommunityPage from './pages/CommunityPage';
import ResourcesPage from './pages/ResourcesPage';
import AITutor from './components/AITutor';

function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cpp" element={<CppCourse />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
      <AITutor />
    </>
  );
}

export default App;
