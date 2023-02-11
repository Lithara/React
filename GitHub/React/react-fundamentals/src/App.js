import './App.css';
import NameList from './Components/Pages/NameList/NameList';
import HeaderBar from './Components/HeaderBar/HeaderBar'
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';

function App() {
  return (
    <div>
        <HeaderBar/>
        <Home/>
        <About/>
        <NameList/>
    </div>
  );
}

export default App;
