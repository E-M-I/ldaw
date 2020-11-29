import React, { Component } from 'react';
import {Card,CardContent, Container, Input, InputLabel,Grid, Paper,Button, Table, TableBody }from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import AppDrawer from './AppDrawer';
import Swal from 'sweetalert2';


const AccionesOferta = props =>{
    const {id} = props.match.params;
    const {status} = props.match.params;
    const {tJuego} = props.match.params;
    const {oJuego} = props.match.params;


    return(
        <div >
            <AppDrawer />
                <br/>
                <br/>
                <br/>
            <Container maxWidth="md">
                <h2 align="center" >Revisar Oferta</h2>
                <Card style={{ backgroundColor: '#38405F'}}>
                    <CardContent align="center" >
                        <FormControl >
                            <InputLabel htmlFor="my-input" style={{ color: '#FFFFFF'}}>Tu juego</InputLabel>
                                <Input id="my-input" disabled value={tJuego} style={{ color: '#FFFFFF'}}>
                            </Input>
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl >
                            <InputLabel htmlFor="my-input" style={{ color: '#FFFFFF'}}>Juego ofrecido</InputLabel>
                                <Input id="my-input" disabled value={oJuego} style={{ color: '#FFFFFF'}}>
                            </Input>
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl >
                            <InputLabel htmlFor="my-input" style={{ color: '#FFFFFF'}}>Acción a realizar</InputLabel>
                                <Input id="my-input" disabled value={status} style={{ color: '#FFFFFF'}}>
                            </Input>
                        </FormControl>
                        <br/>
                        <br/>
                        <div style={{textAlign: 'center'}}>
                            <Button variant="contained" color="primary" onClick={()=>saveAction(id,status)}>{status} Juego</Button>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

function saveAction ($id,$status){
    const values = {
        estado: $status,
    }
    axios.put('http://127.0.0.1:8000/api/ofertas/'+$id, values)
        .then(res => {
           console.log(res);
           Swal.fire(
            '¡Listo!',
            'Has decidido '+$status+ ' la oferta con éxito.',
            'success'
            ).then(function() {
            window.location = "http://localhost:3000/offers/recieved";
            });
        })
    
}

export default AccionesOferta;