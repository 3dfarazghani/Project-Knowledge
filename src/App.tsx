import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import AppsPage from './pages/AppsPage';
import GamesPage from './pages/GamesPage';
import ContactPage from './pages/ContactPage';
import PolicyPage from './pages/PolicyPage';
import MindfulLearning from './pages/apps/MindfulLearning';
import MathExplorer from './pages/games/MathExplorer';
import Dashboard from './pages/educators/Dashboard';
import ImmersiveLab from './pages/educators/ImmersiveLab';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/apps/mindful-learning" element={<MindfulLearning />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/math-explorer" element={<MathExplorer />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/educators/dashboard" element={<Dashboard />} />
          <Route path="/educators/lab" element={<ImmersiveLab />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;