import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
    
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products/">
          <Main />
        </Route>
        <Route exact path="products/:id">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;