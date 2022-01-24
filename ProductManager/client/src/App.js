import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
        <Route path="/products/">
          <Main />
        </Route>
        <Route path="products/:id">
          <Detail />
        </Route>
        <Route path="/products/:id/edit">
          <Update />
        </Route>
    </BrowserRouter>
  );
}

export default App;