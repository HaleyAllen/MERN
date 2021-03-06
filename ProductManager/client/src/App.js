import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/products/">
          <Main />
        </Route>
        <Route path="products/:id">
          <Detail />
        </Route>
        <Route exact path="/products/:id/edit">
          <Update />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;