import './App.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { inicializa } from './basics/index.js';
import { useState } from 'react';


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
  const [choreLogs, setChoreLogs] = useState([]);
  const addChoreLog = (log) => {
    let logs = [...choreLogs, log];
    setChoreLogs(logs);
  }
  return (
    <section>
      <ChoreForm addChoreLog={addChoreLog} />
      <ChoreChart chores={choreLogs} />
    </section>
  );
}


function MainView() {

  // function inic() {

  //   inicializa();
  // }

  inicializa();



  return (
    <div className="App-header">

      {/* <button onClick={inic}></button> */}
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

function ChoreChart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Chore description</th>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {props.chores.map((v, i) => {
        return <tr key={i}>
          <th>{v[0]}</th>
          <th>{v[1]}</th>
          <th>{v[2]}</th>
        </tr>
      })}
        </tbody>
    </table>
  );
}


function ChoreForm({ addChoreLog }) {
  const [choreDesc, setChoreDesc] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const handleSubmit = (e) => {
    addChoreLog([choreDesc, name, date])
    e.preventDefault();
  }

  return (
    <form onSubmit={e => { handleSubmit(e) }}>
      <label>Chore description:</label>
      <br />
      <input
        name='choreDesc'
        type='text'
        value={choreDesc}
        onChange={e => setChoreDesc(e.target.value)}
      />
      <br />
      <label>Name:</label>
      <br />
      <input
        name='name'
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <label>Date:</label>
      <br />
      <input
        name='date'
        type='date'
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <br />
      <input
        type='submit'
        value='Add Log'
      />
    </form>
  )
}




export default App;
