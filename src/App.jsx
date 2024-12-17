import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './components/Home';
import Loja from './components/Store/Loja';
import { Routes, Route } from 'react-router-dom'; // Importando Routes e Route
import Cafes from './components/Store/Cafes';
import EditarCafe from './components/Store/EditarCafe';
import NotFound from './components/utils/NotFound';
import NovoCafe from "./components/Store/NovoCafe copy"
import UserCadastro from './components/User/UserCadastro';
import UserLogin from './components/User/UserLogin';
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
          <Route path="*" element={<NotFound />}/>
          <Route path="/cadastro" element={<UserCadastro/>}/>
          <Route path="/login" element={<UserLogin/>}/>
      </Routes>
    </>
  );
}

export default App;
