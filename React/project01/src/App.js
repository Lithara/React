import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter as Router,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <switch>

          <route path="/">
            <Home/>
          </route>

          <route path="/About">
            <About/>
          </route>

          <route path="/contact">
            <Contact/>
          </route>
          
        </switch>
      </div>
    </Router>
  );
}

export default App;
