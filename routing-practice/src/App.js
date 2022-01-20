import './App.css';
import React, { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Color from './components/Color';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
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

    </div>
  );
}

export default App;