import './App.css';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';


import Home from './Pages/Home.js';
import Insurance from './Pages/Insurance';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
                <Route exact={true} path='/' element={<Home />} />  
                <Route exact={true} path='/Insurance' element={<Insurance/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
