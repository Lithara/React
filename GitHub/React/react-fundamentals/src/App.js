import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NameList from './Components/Pages/NameList/NameList';
import HeaderBar from './Components/HeaderBar/HeaderBar'
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar/>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/namelist">
            <NameList/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
