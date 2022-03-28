import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { inicializa } from './basics/index.js';


function App() {

  return (

    <div className="App">
    
      <nav>

        <Link className='link' to="/data">Datos</Link>
        <Link className='link' to="/mainview">Vista principal</Link>
        <Link className='link' to="/about">About</Link>

      </nav>
      <Routes>
        <Route path="/" element={<DataView />} />
        <Route path="mainview" element={<MainView />} />
        <Route path="data" element={<DataView />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<NoRouteFound />} />
      </Routes>
    </div>



  );
}

function DataView() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          Llenado de datos
        </p>
      </main>

    </>
  );
}


function MainView() {
  
  inicializa();
  


  return (
    <div className="App-header">


      <canvas id='canvas' width='500' height='500'></canvas>

      
    </div>

  )
}


function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>

    </>
  );
}

function NoRouteFound() {
  return (
    <h4>Ruta no encontrada</h4>
  );

}

export default App;
