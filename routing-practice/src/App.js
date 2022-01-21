import './App.css';
import React, { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Color from './components/Color';
import Input from './components/Input';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route exact path="/home">
          <Home />
        </Route>
      
        <Route exact path="/:input/:color1/:color2">
          <Color />
        </Route>
        
        <Route exact path="/:input">
          <Input />
        </Route>

      </Switch>      

    </BrowserRouter>
  );
}

export default App;