import './App.css';
import freeCodeCampLogo from "./images/freecodecamp-logo.png"
import Tarea from './components/Tarea';

function App() {
  return (
    <div className="app-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} className='freecodecamp-logo'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto="Jugar"/>
      </div>
    </div>
  );
}

export default App;
