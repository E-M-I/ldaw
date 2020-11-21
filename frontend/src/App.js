import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegistrarTitulo from "../src/componentes/RegistrarTitulo";
import RegistrarIntereses from "../src/componentes/RegistrarIntereses";
import misInteresesView from "../src/componentes/MisInteresesView";

function App() {
  return (
    <BrowserRouter>
        <div>
          <Switch>
            <Route
              path="/register/title"
              component={RegistrarTitulo} />
            <Route
              path="/misIntereses"
              component={misInteresesView} />
            <Route
              path="/register/interest"
              component={RegistrarIntereses} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
