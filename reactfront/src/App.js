
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importar nuestros componentes.
import ShowUsuarios from './components/ShowUsuario';
import CreateUsuario from './components/CreateUsuario';
import EditUsuario from './components/EditUsuario';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowUsuarios/>}></Route>
        <Route path='/create' element={<CreateUsuario/>}></Route>
        <Route path='/edit/:id' element={<EditUsuario/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
