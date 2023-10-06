import React from 'react';
import './global.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  // Importa Routes en lugar de Switch.
import Navbar from './components/Navbar/Navbar';  // Importa el componente Navbar.
import HomePage from './Pages/Home/HomePage';  // Asegúrate de que la ruta a HomePage es correcta.

function App() {
  return (
    <Router>
      <Navbar />  {/* Usa el componente Navbar aquí. */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
