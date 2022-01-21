import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import Form from './components/Form';
import Error from './components/Error';

function App() {

const history = useHistory();
console.log("history: " +history)

  return (
    <BrowserRouter>
      
      {/* {JSON.stringify(responseData)} */}
      <h1>Luke APIWalker</h1>
      <hr />
      <Form history={ history }/>
      
      <Switch>

        <Route exact path="/people/:id">
          <People  history={history}/>
        </Route>

        <Route exact path="/planets/:id">
          <Planets  history={history} />
        </Route>

        <Route path="/:error">
          <Error/>
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;