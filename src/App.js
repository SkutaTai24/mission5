import './App.css';
import { BrowserRouter as Router,  Route } from 'react-router-dom';


import Home from './Pages/Home.js';
import Insurance from './Pages/Insurance';

function App() {
  return (
    <div className="App">
    <Router>
        
          <Route path='/' exact component={Home} />  
          <Route path='/Insurance' component={Insurance} />
        
    </Router>
      
    </div>
  );
}

export default App;
