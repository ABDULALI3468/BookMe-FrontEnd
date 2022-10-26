import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './components/MainPage';
import DeleteTours from './components/DeleteTours';
import TourDetails from './components/TourDetails';
import CreateTour from './components/CreateTour';
import LogInPage from './components/LogInPage';

import './styles/index.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/LogInPage" element={<LogInPage />} />
        <Route path="/CreateTour" element={<CreateTour />} />
        <Route path="/DeleteTours" element={<DeleteTours />} />
        <Route path="/tourDetails" element={<TourDetails />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
