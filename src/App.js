import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokemonPage from './containers/PokemonPage';
import RedirectComponent from './components/RedirectComponent';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/pokemon/:id" component={PokemonPage} />
        <Route path="*" component={RedirectComponent} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
