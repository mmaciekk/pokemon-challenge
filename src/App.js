import React from 'react';
import './App.css';
import PokemonPage from './containers/PokemonPage';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Route path='/pokemon/:id' component={PokemonPage}/>
    </BrowserRouter>
  </div>
);

export default App;
