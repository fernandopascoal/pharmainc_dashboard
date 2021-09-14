import './App.css';
import Store from './contexts/Store';
import { BrowserRouter as Router, Route} from "react-router-dom" ; 
import React from 'react';
import Routes from './routes';


function App() {



  return (
    <Router>
      <Store>
          <div className="App  bg-light">
              <Routes />
          </div>
      </Store>
    </Router>
  );
}

export default App;
