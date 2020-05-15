import React from 'react';
import './App.css';

import BarraNav from './Componentes/BarraNav/BarraNav';
import Home from './Componentes/Home/Home';
import SobreNosotros from './Componentes/SobreNosotros/SobreNosotros.js';
import Servicios from './Componentes/GrupoServicios/Servicios.js';
import Portafolio from './Componentes/Portafolio/Portafolio'; 
import Formulario from './Componentes/Formulario/Formulario';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <div>
      <BarraNav/>  
      <Home/>
      <Servicios/>
      <Portafolio/>
      <SobreNosotros/>
      <Formulario/>
      <Footer/>
    </div>
  );
}

export default App;
