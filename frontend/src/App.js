import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from "@material-ui/styles";
import AppDrawer from './componentes/AppDrawer';
import Home from './componentes/Home';
import RegistrarJuego from './componentes/Juegos/RegistrarJuego';
import RegistrarTitulo from "../src/componentes/Titulos/RegistrarTitulo";
import misInteresesView from "../src/componentes/MisInteresesView";
import RegistrarIntereses from "../src/componentes/RegistrarIntereses";
import RealizarOferta from "../src/componentes/RealizarOferta";
import OfertasRec from "../src/componentes/OfertasRec";
import OfertasRea from "../src/componentes/OfertasRea";
import AccionesOferta from "../src/componentes/AccionesOferta";
import MisInteresesView from "../src/componentes/MisInteresesView";

import Login from './componentes/Login'
import Register from './componentes/Register'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact="true" component={localStorage.getItem('token') && localStorage.getItem('auth') ? MisInteresesView : Login} />
				<Route path="/register/game" exact="true" component={localStorage.getItem('token') && localStorage.getItem('auth') ? RegistrarJuego : Login} />
				<Route path="/register/title" component={localStorage.getItem('token') && localStorage.getItem('auth') ? RegistrarTitulo : Login} />
        		<Route path="/misIntereses" component={localStorage.getItem('token') && localStorage.getItem('auth') ? misInteresesView : Login} />
				<Route path="/register/interest" component={localStorage.getItem('token') && localStorage.getItem('auth') ? RegistrarIntereses : Login} />
				<Route path="/realizarOferta/:owner/:juegoId/:consola/:nombreJ" component={localStorage.getItem('token') && localStorage.getItem('auth') ? RealizarOferta : Login} />
				<Route path="/offers/recieved" component={localStorage.getItem('token') && localStorage.getItem('auth') ? OfertasRec : Login} />
				<Route path="/offers/registered" component={localStorage.getItem('token') && localStorage.getItem('auth') ? OfertasRea : Login} />
				<Route path="/offers/actions/:id/:status/:tJuego/:oJuego/:idJO/:idJP" component={localStorage.getItem('token') && localStorage.getItem('auth') ? AccionesOferta : Login} />
				<Route path="/login" component={Login} />
        		<Route path="/register" component={Register} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
