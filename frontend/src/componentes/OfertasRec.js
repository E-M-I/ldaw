import React, { Component } from 'react';
import {Card, CardContent, Container, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper }from '@material-ui/core';
import axios from 'axios';
import AppDrawer from './AppDrawer';
import BotonAccionesOferta from '../componentes/BotónAccionesOferta';


export default class OfertasRec extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          ofertas:[]
        }
    }

    componentDidMount(){
        this.getOfertasRec();
    }

    getOfertasRec(){
        axios.get('http://127.0.0.1:8000/api/juegos/oferta/ofertasRec/' + 4)
        .then(res => {
            //Recuperar todos los intereses
            res.data.forEach(element => {
                console.log(element);
                this.setState({
                    ofertas: this.state.ofertas.concat(element)
                 });
            });
        })
    }

    render (){
        return(
            <div>
                <AppDrawer/>
                <br/>
                <br/>
                <br/>
                <Container maxWidth="md">
                    <h2 align="center">Ofertas Recibidas</h2>
                    
                    <Card style={{ backgroundColor: '#38405F'}}>
                        <CardContent align="center">
                        <TableContainer component={Paper}>
                                        <Table style={{minWidth:'650px'}} aria-label="simple table">
                                            <TableHead>
                                              <TableRow>
                                                <TableCell align="center">Id Oferta</TableCell>
                                                <TableCell align="center">Tu juego</TableCell>
                                                <TableCell align="center">Juego Ofrecido para Cambio</TableCell>
                                                <TableCell align="center">Consola</TableCell>
                                                <TableCell align="center">Ofertante</TableCell>
                                                <TableCell align="center">Acciones</TableCell>
                                              </TableRow>
                                            </TableHead>
                                            <TableBody>
                            
                                {this.state.ofertas.map((info)=>(
                                    <TableRow key={info.id}>   
                                    <TableCell align="center">{info.id}</TableCell>
                                    <TableCell align="center">{info.JuegoPub}</TableCell>
                                    <TableCell align="center">{info.JuegoOf}</TableCell>
                                    <TableCell align="center">{info.CJO}</TableCell>
                                    <TableCell align="center"> {info.UsuarioOf}</TableCell>
                                    <TableCell align="center">
                                    
                                    
                                        <BotonAccionesOferta id={info.id} oJuego={info.JuegoOf} tJuego={info.JuegoPub} idJO={info.idJuegoPublicado} idJP={info.idJuegoOfertado} status="Aceptar" color="primary"/>
                                        <br/>
                                        <br/>
                                        <BotonAccionesOferta id={info.id} oJuego={info.JuegoOf} tJuego={info.JuegoPub} idJO={info.idJuegoPublicado} idJP={info.idJuegoOfertado} status="Rechazar" color="secondary"/>
                                    
                                    </TableCell>
                                  </TableRow>
                                ))}

                                        </TableBody>
                                        </Table>
                                    </TableContainer>
                        </CardContent> 
                    </Card>
                </Container>
            </div>
        )
    }
}