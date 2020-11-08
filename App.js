import React from 'react';
import './App.css';
import fondo from './imagen/fondo/fondos.PNG';



function Titulo () {
  return (
    <div id ="titulo"> Aquazone 
    </div>
  )
}


function App() {
  return (
    <div>
       Twitter  Facebook  Instagram
        <Titulo/>
        <img src= {fondo}/> 
                </div>

  
  )
}  


export default App;
