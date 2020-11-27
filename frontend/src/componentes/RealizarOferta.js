import React, { Component } from 'react';
import {Card,CardContent, Container, Input, InputLabel,Grid, Paper,Button, Table, TableBody }from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import AppDrawer from './AppDrawer';
import Swal from 'sweetalert2';

var ownerG;
var juegoIdG;
const RealizarOferta = props =>{
    const {owner} = props.match.params;
    const {juegoId} = props.match.params;
    const {consola} = props.match.params;
    const {nombreJ} = props.match.params;
    ownerG = owner;
    juegoIdG = juegoId;
    crearSelect();
    return(
        <div >
            <AppDrawer />
                <br/>
                <br/>
                <br/>
            <Container maxWidth="md">
                <h2 align="center" >Realizar Oferta</h2>
                <Card style={{ backgroundColor: '#38405F'}}>
                    <CardContent align="center" >
                        <FormControl >
                            <InputLabel htmlFor="my-input" style={{ color: '#FFFFFF'}}>Juego</InputLabel>
                                <Input id="my-input" disabled value={nombreJ} style={{ color: '#FFFFFF'}}>
                            </Input>
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl >
                            <InputLabel htmlFor="my-input" style={{ color: '#FFFFFF'}}>Consola</InputLabel>
                                <Input id="my-input" disabled value={consola} style={{ color: '#FFFFFF'}}>
                            </Input>
                        </FormControl>
                        <br/>
                        <br/>
                        <h4 style={{ color: '#FFFFFF'}}>Selecciona uno de tus juegos para cambiar:</h4>
                        <br/>
                        <select style={{ width: 200}} id="selec"  label="juego">
                        </select>
                        <br/>
                        <br/>
                        <div style={{textAlign: 'center'}}>
                            <Button variant="contained" color="primary" onClick={crearOferta}>Registrar</Button>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

function crearSelect(){
    var sel='<option value="0"><None</option>';
    const num=1;
    axios.get("http://localhost:8000/api/juegos/oferta/1")
      .then(function (resp){
        console.log(resp.data);
        //Ciclo for para obtener cada uno de los elementos
        resp.data.forEach(element => {
         sel = sel.concat('<option value="' + element.id + '"> ' + element.nombre + '</option> ');
        });
        //insertar el select en el html
       document.getElementById("selec").innerHTML = sel;
      } );
  }

  function crearOferta(){
      if(document.getElementById('selec').value != 0){
        const values = {
            idUO: 1,
            idTP: juegoIdG,
            idTO: document.getElementById('selec').value,
            idUP: ownerG
        }
        axios.post("http://localhost:8000/api/ofertas", values)
        .then(function (resp){
            if(resp.data == 1){
                Swal.fire(
                    '¡Listo!',
                    'Se creó la oferta',
                    'success'
                    ).then(function() {
                    window.location = "http://localhost:3000/misIntereses";
                    });
            }else{
                Swal.fire(
                    '¡Error!',
                    'Hubo un error al tratar de crear la oferta, intenta de nuevo',
                    'error'
                    ).then(function() {
                    window.location = "http://localhost:3000/register/interest";
                    });
            }
          } );
      }else{
        Swal.fire(
            '¡Error!',
            'Introduce uno de tus juegos para intercambiar',
            'error'
            )
      }
    
  }

export default RealizarOferta;