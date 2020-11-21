import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from "@material-ui/styles";
import AppDrawer from './componentes/AppDrawer';
import Home from './componentes/Home';
import RegistrarJuego from './componentes/Juegos/RegistrarJuego';
import RegistrarTitulo from "../src/componentes/RegistrarTitulo";
import misInteresesView from "../src/componentes/MisInteresesView";


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact="true" component={Home} />
				<Route path="/register/game" exact="true" component={RegistrarJuego} />
				<Route path="/register/title" component={RegistrarTitulo} />
        <Route path="/misIntereses" component={misInteresesView} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
