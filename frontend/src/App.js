import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegistrarTitulo from "../src/componentes/RegistrarTitulo";

function App() {
  return (
    <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/register/title"
              component={RegistrarTitulo} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
