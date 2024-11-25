import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './components/Home';
import Loja from './components/Loja';
import { Routes, Route } from 'react-router-dom'; // Importando Routes e Route
import Cafes from './components/Cafes';
import NovoCafe from './components/NovoCafe';
import EditarCafe from './components/EditarCafe';
import NotFound from './components/NotFound';

function App() {
  
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/cafes" element={<Cafes />} />
          <Route path="/novocafe" element={<NovoCafe />} />
          <Route path="/editar" element={<Cafes />} />
          <Route path="/editarCafeId" element={<EditarCafe />}/>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
