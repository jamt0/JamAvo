import React from 'react';
import Jam from './components/Jam/Jam';
import { NavBar } from './components/NavBar/NavBar';
import Wave from "./components/Wave/Wave";

function App() {
  return (
    <div className="h-screen flex">
      <NavBar/>
      <Jam/>
    </div>
  );
}

export default App;
