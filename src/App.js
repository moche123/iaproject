import './App.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { inicializa } from './basics/index.js';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img from './filascolumnas.png'
import img2 from './casovalido.PNG'
import img3 from './novalido.PNG'
function App() {

  const [rowOrigin, setrowOrigin] = useState('');
  const [rowDestiny, setrowDestiny] = useState('');
  const [choreLogs, setChoreLogs] = useState([]);
  const [submitValido, setSubmitValido] = useState(false);
  const [submitValido2, setSubmitValido2] = useState(false);
  const [click, setClick] = useState(false);


  return (

    <div className="App">

      <nav className='menu'>

        <Link className='link' to="/data">Datos</Link>
        <Link className='link' to="/mainview">Vista algoritmo</Link>
        <Link className='link' to="/about">Nosotros</Link>

      </nav>
      <Routes>
        <Route path="/" element={<DataView rowOrigin={rowOrigin}
          rowDestiny={rowDestiny} setrowOrigin={setrowOrigin} setrowDestiny={setrowDestiny}
           choreLogs={choreLogs} setChoreLogs={setChoreLogs}
            submitValido={submitValido} setSubmitValido={setSubmitValido}
            submitValido2={submitValido2} setSubmitValido2={setSubmitValido2} 
            click={click} setClick={setClick} 
            
            />} />



        <Route path="mainview" element={<MainView rowOrigin={rowOrigin}
          rowDestiny={rowDestiny}
          submitValido={submitValido}
          submitValido2={submitValido2} 
          click={click} setClick={setClick} 
          
          />} />




        <Route path="data" element={<DataView rowOrigin={rowOrigin}
          rowDestiny={rowDestiny} setrowOrigin={setrowOrigin} setrowDestiny={setrowDestiny} choreLogs={choreLogs} 
          setChoreLogs={setChoreLogs}
          submitValido={submitValido} setSubmitValido={setSubmitValido}
            submitValido2={submitValido2} setSubmitValido2={setSubmitValido2}
            click={click} setClick={setClick}
        />} />


        <Route path="about" element={<About />} />

        <Route path="*" element={<NoRouteFound />} />
      </Routes>
    </div>



  );
}

function DataView({ rowOrigin, rowDestiny, setrowOrigin, setrowDestiny, choreLogs, setChoreLogs, submitValido, 
  setSubmitValido, submitValido2, setSubmitValido2
  , click, setClick 
}) {
  //let obstacles = [];

  const addChoreLog = (log) => {
    let logs = [...choreLogs, log];
    setChoreLogs(logs);
  }

  return (
    <section>
      <ChoreForm addChoreLog={addChoreLog} rowOrigin={rowOrigin}
        rowDestiny={rowDestiny} setrowOrigin={setrowOrigin} 
        setrowDestiny={setrowDestiny} 
        submitValido={submitValido} setSubmitValido={setSubmitValido}
        submitValido2={submitValido2} setSubmitValido2={setSubmitValido2} 
        click={click} setClick={setClick}
        
        />
        
        
      {/* <ChoreChart chores={choreLogs} /> */}
    </section>
  );





}


function MainView({ rowOrigin, rowDestiny,submitValido,submitValido2
  ,click, setClick
}) {

  let rowInicio = rowOrigin.split(',')[0];
  let colInicio = rowOrigin.split(',')[1]
  let rowFinal = rowDestiny.split(',')[0];
  let colFinal = rowDestiny.split(',')[1];
  console.log(rowInicio);
  console.log(colInicio);
  console.log(rowFinal);
  console.log(colFinal);


  if(submitValido && submitValido2 && click){
    inicializa(rowInicio, colInicio, rowFinal, colFinal);
  }



  return (

    <div>
      {
        (submitValido && submitValido2 && click) ?
        <div className="App-header">
          <canvas id='canvas' width='500' height='500'></canvas>
        </div>

        : <div>
          <p>Completa correctamente el formulario</p>
        </div>
      }
    </div>

  )
}


function About() {
  return (
    <>
      <main>
        <h2>Autores del proyecto</h2>
        <br />
        <div>
          <p>Leysi Aurich Mio</p>
          <p>Emerson Perales Villanueva</p>
          <p>Moisés Miguel Flores</p>
          <p>Kleider Mejía Arrascue</p>
        </div>
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


function ChoreForm({ addChoreLog, rowOrigin, rowDestiny, setrowOrigin, setrowDestiny, 
  submitValido, setSubmitValido, submitValido2, setSubmitValido2,
  click, setClick 

}) {



  // const [submitValido, setSubmitValido] = useState(false);
  // const [submitValido2, setSubmitValido2] = useState(false);
  // let submitValido = true;.
  const handleSubmit = (e) => {
    console.log('A')
    setClick(true);
    let valido = true;
    e.preventDefault();
    fetch('https://node-iaapp.herokuapp.com/api/obsctacle/all')
      .then(response => response.json())
      .then(data => {
        console.log(data)

        data.forEach(element => {
          console.log(element.posx, element.posy);
          if (

            (
              element.posx == 16 - rowOrigin.split(',')[0] && element.posy == rowOrigin.split(',')[1]

            ) ||
            (
              element.posx == 16 - rowDestiny.split(',')[0] && element.posy == rowDestiny.split(',')[1]
            )

          ) {
            console.log('match' + element.posx, element.posy);
            valido = false;
          }
        })

        if (valido) {
          setSubmitValido(true)
          setSubmitValido2(true)
          addChoreLog([rowOrigin, rowDestiny])
          console.log('CORRECT')

        } else {
          setSubmitValido(false)
          setSubmitValido2(false)
          console.log('NOO')

          e.preventDefault();
        }


      })


  }

  return (

    <>
      <form onSubmit={e => { handleSubmit(e) }}>
      <label>Coordenada de origen:</label>
      <br />
      <input
        name='rowOrigin'
        type='text'
        value={rowOrigin}
        onChange={e => {
          setClick(false);
          setSubmitValido(true)
          setSubmitValido2(true)

          setrowOrigin(e.target.value)
          if (e.target.value.split(',').length > 1 && e.target.value.split(',')[1].length > 0 && !isNaN(e.target.value.split(',')[0])) {
            setSubmitValido(true)
          } else {
            setSubmitValido(false)


          }
        }
        }

      />
      {
        (rowOrigin.split(',').length == 1 || rowOrigin.split(',')[1].length == 0 || isNaN(rowOrigin.split(',')[0])) && <p>Ingrese formato correcto</p>


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
          setClick(false);
          setSubmitValido(true)
          setSubmitValido2(true)
          setrowDestiny(e.target.value)
          if (e.target.value.split(',').length > 1 && e.target.value.split(',')[1].length > 0 && !isNaN(e.target.value.split(',')[0])) {
            setSubmitValido2(true)
          } else {
            setSubmitValido2(false)
          }
        }
        }
      />
      {
        (rowDestiny.split(',').length == 1 || rowDestiny.split(',')[1].length == 0 || isNaN(rowOrigin.split(',')[0])) && <p>Ingrese formato correcto</p>


      }
      <br /> 
      {/* <br />
      <input
        name='date'
        type='date'
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <br /> */}
      <Button
        type='submit'
        value='Validar'
        className="bg-primary cursor-pointer"
        disabled={(!submitValido || !submitValido2)}
      >
        Validar
      </Button>
      
      {
        (!submitValido || !submitValido2) && !click && <p>Vista no posible de acceder</p>
      }
      {
        submitValido && submitValido2 && click && <p>Muy bien!!, ahora pase a la vista para poder ver la ruta</p>
      }
       {
        (!submitValido || !submitValido2) && click && <p>Hay obstáculos</p>
      }
    </form>

    <br  /> <br  />
    <h2>Guía</h2>

    <p>En el siguiente gráfico el origen y destino se define por filas y columnas, el esquema tiene 16 filas y 16 columnas</p>
    <img src={img} alt="" />
    <br  /> <br  /> <br  /> 
    
    <h3>Coordenada válida</h3>
    <p>En este caso, se escogieron 0,0 y 3,3 como coordenadas cuadrangulares</p>
    <img src={img2} alt="" />


    <br  /> <br  /> <br  /> 
    
    <h3>Coordenada no válida</h3>
    <p>En este caso, El formulario emitirá un valor diciendo que se cruza con un obstáculo</p>
    <img src={img3} alt="" />

    

    <br  />
    </>
    
  )
}




export default App;
