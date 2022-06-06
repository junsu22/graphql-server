import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
  <BrowserRouter>
<Switch>
  <Route exact path ="/edit/:id" component = {Edit} />
  <Route exact path ="/book/:id" component = {Detail} />
  <Route exact path ="/add" component = {Add} />
  <Route exact path ="/signin" component = {Signin} />
    <Route exact path ="/" component = {Home} />
    <Router component = {NotFound} />
</Switch>
  </BrowserRouter>
  );
}

export default App;
