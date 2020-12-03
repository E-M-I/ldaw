import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Card,CardContent, Container, Grid, Paper,Button, Table, TableBody }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import LinkOfertas from '../componentes/LinkOfertas';

import AppDrawer from './AppDrawer';
//API calls
import axios from 'axios';



export default class MisInteresesView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          intereses:[]
        }
    }


    componentDidMount(){
        this.getIntereses();
    }

    getIntereses(){
        var idU;
        axios.get("http://localhost:8000/api/account/"+localStorage.getItem('email').toString())
          .then(response => {
              localStorage.setItem('rol', response.data[0].idRol);
              idU = response.data[0].id;
              axios.get('http://localhost:8000/api/intereses/misIntereses/' + response.data[0].id)
        .then(res => {
            //Recuperar todos los intereses
            res.data.forEach(element => {
                console.log(element);
                this.setState({
                    intereses: this.state.intereses.concat(element)
                 });
                 document.getElementById("MensajeError").style.display = 'none';
            });
        })
          })
          .catch(error => {
              console.log(error);
          });
        
    }

    render(){
        return(
            <div style={{display: 'flex'}} >
                <AppDrawer />
                <br/>
                <br/>
                <br/>
                <Container maxWidth="md" >
                    <h2 align="center">Mis Intereses</h2>
                    <Card id="MensajeError" style={{ backgroundColor: '#38405F'}}>
                        <CardContent align="center">
                                    <h1>NO HAY INTERESES QUE MOSTRAR</h1>
                                    <br/>
                                    <br/>
                                    <Link to="register/interest"><h2 style={{color:"white"}}>Aquí puedes registrar intereses</h2></Link>
                        </CardContent> 
                    </Card>
                    <Card style={{ backgroundColor: '#38405F', display:'flex'}}>
                        <CardContent align="center" style={{display: 'flex'}}>
                            <Grid container spacing={3}>
                                {this.state.intereses.map((info)=>(
                                    
                                <Grid item  s={6} m={4}key={info.id} >
                                    
                                        <Paper style={{textAlign: 'center'},{padding: 10}}>
                                            <h2> {info.nombreJ} </h2>
                                            <h4>Consola: {info.nombreC}</h4>
                                            <h4>Dueño: {info.username}</h4>
                                            <LinkOfertas owner={info.owner} juegoId={info.id} consola={info.nombreC} nombreJ={info.nombreJ}/>
                                        </Paper>                                    
                                </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        )
    }

}