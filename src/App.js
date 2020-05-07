import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import BarraNav from './Componentes/BarraNav/BarraNav';
import Home from './Componentes/Home/Home';
import Slider from './Componentes/Slider/Slider';
import SobreNosotros from './Componentes/SobreNosotros/SobreNosotros.js';
import Servicios from './Componentes/GrupoServicios/Servicios.js';
import Portafolio from './Componentes/Portafolio/Portafolio'; 
import Formulario from './Componentes/Formulario/Formulario';

function App() {
  return (
    <div>
      <BarraNav/>  
      <Home/>
      <Servicios/>
      <Portafolio/>
      <SobreNosotros/>
      <Formulario/>
      <Slider/>
    </div>
  );
}

export default App;
