import logo from './logo.svg';
import './App.css';
import Dashboard from './views/Dashboard';
import Store from './contexts/Store';

function App() {
  return (
    <Store>
      <div className="App">
        <Dashboard/>
      </div>
    </Store>
  );
}

export default App;
