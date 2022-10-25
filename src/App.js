import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import DeleteTours from './components/DeleteTours';
import TourDetails from './components/TourDetails';
import './styles/index.css';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/DeleteTours" element={<DeleteTours />} />
        <Route path="/tourDetails" element={<TourDetails />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
