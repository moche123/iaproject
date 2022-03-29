import './App.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { inicializa } from './basics/index.js';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

function App() {

  const [rowOrigin, setrowOrigin] = useState('');
  const [rowDestiny, setrowDestiny] = useState('');
  const [choreLogs, setChoreLogs] = useState([]);

 

  return (

    <div className="App">

      <nav>

        <Link className='link' to="/data">Datos</Link>
        <Link className='link' to="/mainview">Vista principal</Link>
        <Link className='link' to="/about">About</Link>

      </nav>
      <Routes>
        <Route path="/" element={<DataView rowOrigin={rowOrigin}
          rowDestiny={rowDestiny} setrowOrigin={setrowOrigin} setrowDestiny={setrowDestiny} choreLogs={choreLogs} setChoreLogs={setChoreLogs} 
           />} />



        <Route path="mainview" element={<MainView rowOrigin={rowOrigin}
          rowDestiny={rowDestiny} />} />




        <Route path="data" element={<DataView rowOrigin={rowOrigin}
          rowDestiny={rowDestiny} setrowOrigin={setrowOrigin} setrowDestiny={setrowDestiny} choreLogs={choreLogs} setChoreLogs={setChoreLogs} 
          />} />


        <Route path="about" element={<About />} />

        <Route path="*" element={<NoRouteFound />} />
      </Routes>
    </div>



  );
}

function DataView({ rowOrigin, rowDestiny, setrowOrigin, setrowDestiny, choreLogs, setChoreLogs }) {
  //let obstacles = [];

  const addChoreLog = (log) => {
    let logs = [...choreLogs, log];
    setChoreLogs(logs);
  }

  return (
    <section>
      <ChoreForm addChoreLog={addChoreLog} rowOrigin={rowOrigin}
        rowDestiny={rowDestiny} setrowOrigin={setrowOrigin} setrowDestiny={setrowDestiny} />
      {/* <ChoreChart chores={choreLogs} /> */}
    </section>
  );





}


function MainView({ rowOrigin, rowDestiny }) {

  let rowInicio = rowOrigin.split(',')[0];
  let colInicio = rowOrigin.split(',')[1]
  let rowFinal = rowDestiny.split(',')[0];
  let colFinal = rowDestiny.split(',')[1];
  console.log(rowInicio);
  console.log(colInicio);
  console.log(rowFinal);
  console.log(colFinal);


  inicializa(rowInicio, colInicio, rowFinal, colFinal);



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

// function ChoreChart(props) {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Chore description</th>
//           <th>Name</th>
//           <th>Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         {props.chores.map((v, i) => {
//           return <tr key={i}>
//             <th>{v[0]}</th>
//             <th>{v[1]}</th>
//             <th>{v[2]}</th>
//           </tr>
//         })}
//       </tbody>
//     </table>
//   );
// }


function ChoreForm({ addChoreLog, rowOrigin, rowDestiny, setrowOrigin, setrowDestiny }) {



  const [submitValido, setSubmitValido] = useState(false);
  const [submitValido2, setSubmitValido2] = useState(false);
  // let submitValido = true;
  const handleSubmit = (e) => {

    let valido = true;
    e.preventDefault();
    fetch('http://localhost:4000/api/obstacle/all')
    .then(response => response.json())
    .then(data => {
  
      data.forEach(element => {
        console.log(element.posx,element.posy);
        if(

          (
            element.posx == 16-rowOrigin.split(',')[0] && element.posy == rowOrigin.split(',')[1]
          
          ) ||
          (
            element.posx == 16-rowDestiny.split(',')[0] && element.posy == rowDestiny.split(',')[1]
          )
          
          ){
            console.log('match'+element.posx,element.posy);
          valido = false;
        }
      })

      if(valido){
        setSubmitValido(true)
        addChoreLog([rowOrigin, rowDestiny])
   
      }else{
        setSubmitValido(false)
        e.preventDefault();
      }
  
  
    })

    
  }

  return (
    <form onSubmit={e => { handleSubmit(e) }}>
      <label>Coordenada de origen:</label>
      <br />
      <input
        name='rowOrigin'
        type='text'
        value={rowOrigin}
        onChange={e => {
          setrowOrigin(e.target.value)
          if (e.target.value.split(',').length > 1 && e.target.value.split(',')[1].length>0 && !isNaN(e.target.value.split(',')[0])) {
            setSubmitValido(true)
          }else{
            setSubmitValido(false)
          }
        }
        }

      />
      {
        (rowOrigin.split(',').length ==1 || rowOrigin.split(',')[1].length==0 || isNaN(rowOrigin.split(',')[0]))  && <p>Ingrese formato correcto</p>


      }
      <p ></p>
      <br />
      <label>Coordenada de destino</label>
      <br />
      <input
        name='rowDestiny'
        type='text'
        value={rowDestiny}
        onChange={e => {
          setrowDestiny(e.target.value)
          if (e.target.value.split(',').length >1 && e.target.value.split(',')[1].length>0 && !isNaN(e.target.value.split(',')[0])) {
            setSubmitValido2(true)
          }else{
            setSubmitValido2(false)
          }
        }
        }
      />
      {
        (rowDestiny.split(',').length ==1 || rowDestiny.split(',')[1].length==0 || isNaN(rowOrigin.split(',')[0])) && <p>Ingrese formato correcto</p>


      }
      <br />
      <label>Date:</label>
      {/* <br />
      <input
        name='date'
        type='date'
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <br /> */}
      <input
        type='submit'
        value='Add Log'
        disabled={(!submitValido || !submitValido2)}
      />
      {
        !submitValido && <p>Formulario no posible de envíar aún</p>
      }
    </form>
  )
}




export default App;
