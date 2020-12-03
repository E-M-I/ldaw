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


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact="true" component={MisInteresesView} />
				<Route path="/register/game" exact="true" component={RegistrarJuego} />
				<Route path="/register/title" component={RegistrarTitulo} />
        		<Route path="/misIntereses" component={misInteresesView} />
				<Route path="/register/interest" component={RegistrarIntereses} />
				<Route path="/realizarOferta/:owner/:juegoId/:consola/:nombreJ" component={RealizarOferta} />
				<Route path="/offers/actions/:id/:status/:tJuego/:oJuego/:idJO/:idJP" component={AccionesOferta} />
				<Route path="/offers/recieved" component={OfertasRec} />
				<Route path="/offers/registered" component={OfertasRea} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
