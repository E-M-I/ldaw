import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegistrarTitulo from "../src/componentes/RegistrarTitulo";
import RegistrarIntereses from "../src/componentes/RegistrarIntereses";

function App() {
  return (
    <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/register/title"
              component={RegistrarTitulo} />
            <Route
              path="/register/interest"
              component={RegistrarIntereses} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
