import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GenreDetails from './pages/GenreDetails';
import Header from './components/Header';
import ErrorBoundary from './pages/ErrorBoundary';
import ArtistDetails from './pages/ArtistDetails';

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre/:id" element={<GenreDetails />} /> 
        <Route path="/artist/:id" element={<ArtistDetails />} /> 
      </Routes>
    </ErrorBoundary>
  );
};

export default App;

