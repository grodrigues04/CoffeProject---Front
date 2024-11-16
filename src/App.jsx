import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './components/Home';
import Revenues from './components/Revenues';
import { Routes, Route } from 'react-router-dom'; // Importando Routes e Route
import Cafes from './components/Cafes';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/revenues" element={<Revenues />} />
          <Route path="/cafes" element={<Cafes />} />
      </Routes>
    </>
  );
}

export default App;
