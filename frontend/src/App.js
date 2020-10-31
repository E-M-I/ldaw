import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RegistrarTitulo from "../src/componentes/RegistrarTitulo";
import { makeStyles } from "@material-ui/styles";
import AppDrawer from './componentes/AppDrawer';
import Home from './componentes/Home';

const useStyles = makeStyles({
  container: {
    display: 'flex'
  }
});

function App() {
	const classes = useStyles();
	return (
		
			
				<BrowserRouter>
				<AppDrawer />
				<Switch>
					<Route path="/" exact="true" component={Home} />
					<Route path="/register/title" component={RegistrarTitulo} />
				</Switch>
			</BrowserRouter>
		
	);
}

export default App;
