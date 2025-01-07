import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ArtistDetail from './pages/ArtistDetail';
import AlbumDetail from './pages/AlbumDetail';
import Header from './components/Header';
import ErrorBoundary from './pages/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:id" element={<ArtistDetail />} />
        <Route path="/album/:id" element={<AlbumDetail />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
