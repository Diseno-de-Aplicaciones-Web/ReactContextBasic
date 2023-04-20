import { useState, createContext } from 'react';
import VistaConfiguraciones from './componentes/VistaConfiguraciones';
import './App.css';

const Contexto = createContext()

function App() {

  const [ usuario, setUsuario ] = useState("Daniel")

  return (
    <Contexto.Provider value={[usuario, setUsuario]}>
      <h1>Ejemplo de contexto de React</h1>
      <p>Valor do contexto: {usuario}</p>
      <VistaConfiguraciones/>
    </Contexto.Provider>
  );
}

export default App;
export {
  Contexto
}