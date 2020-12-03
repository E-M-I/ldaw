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
        axios.get("http://localhost:8000/api/account/"+localStorage.getItem('email').toString())
          .then(response => {
              localStorage.setItem('rol', response.data[0].idRol);
              axios.get('http://127.0.0.1:8000/api/juegos/oferta/ofertasRec/' + response.data[0].id)
              .then(res => {
                  //Recuperar todos los intereses
                  res.data.forEach(element => {
                      console.log(element);
                      this.setState({
                          ofertas: this.state.ofertas.concat(element)
                       });
                      document.getElementById("MensajeError").style.display = 'none';
                  });
              })
          })
          .catch(error => {
              console.log(error);
          });
        
    }

    render (){
        return(
            <div style={{display: "flex"}}>
                <AppDrawer/>
                <br/>
                <br/>
                <br/>
                <Container maxWidth="md">
                    <h2 align="center">Ofertas Recibidas</h2>
                    <Card id="MensajeError" style={{ backgroundColor: '#38405F'}}>
                        <CardContent align="center">
                                    <h1>NO HAY OFERTAS QUE MOSTRAR</h1>
                        </CardContent> 
                    </Card>
                    
                    <Card style={{ backgroundColor: '#38405F'}}>
                        <CardContent align="center">
                        <div style={ { maxHeight: '500px', overflowY: 'auto' } }>
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
                                    
                                    
                                        <BotonAccionesOferta id={info.id} oJuego={info.JuegoOf} tJuego={info.JuegoPub} idJO={info.idJuegoOfertado} idJP={info.idJuegoPublicado} status="Aceptar" color="primary"/>
                                        <br/>
                                        <br/>
                                        <BotonAccionesOferta id={info.id} oJuego={info.JuegoOf} tJuego={info.JuegoPub} idJO={info.idJuegoOfertado} idJP={info.idJuegoPublicado} status="Rechazar" color="secondary"/>
                                    
                                    </TableCell>
                                  </TableRow>
                                ))}

                                        </TableBody>
                                        </Table>
                                    </TableContainer>
                            </div>
                        </CardContent> 
                    </Card>
                   
                </Container>
            </div>
        )
    }
}