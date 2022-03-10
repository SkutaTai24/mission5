import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home.js'
import Quotes from './Pages/Quotes.js'
import Insurance from './Pages/Insurance'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Insurance' element={<Insurance />} />
          <Route exact path='/Quotes' element={<Quotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
