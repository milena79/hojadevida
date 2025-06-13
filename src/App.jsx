import React from 'react';  // Necesario para React 17 y algunas configuraciones
import './App.css';
import Encabezado from './components/Encabezado';
import Perfil from './components/Perfil';
import Educacion from './components/Educacion';
import Habilidades from './components/Habilidades';
import Experiencia from './components/Experiencia';
import Referencias from './components/Referencias';

function App() {
  return (
    <div className="app">
      <Encabezado />
      <main className="container">
        <Perfil />
        <Educacion />
        <Habilidades />
        <Experiencia />
        <Referencias />
      </main>
    </div>
  );
}

export default App;
