import React, { Component } from 'react';
import {Card,CardContent, Container, Grid, Paper,Button, Table, TableBody }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
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
        axios.get('http://localhost:8000/api/intereses/misIntereses/' + 1)
        .then(res => {
            //Recuperar todos los intereses
            res.data.forEach(element => {
                console.log(element);
                this.setState({
                    intereses: this.state.intereses.concat(element)
                 });
            });
        })
    }

    render(){
        return(
            <div >
                <Container maxWidth="md">
                    <h2 align="center">Mis Intereses</h2>
                    <Card style={{ backgroundColor: '#7c7595'}}>
                        <CardContent align="center" >
                            <Grid container spacing={3}>
                                {this.state.intereses.map((info)=>(
                                    
                                <Grid item xs={4} key={info.id}>
                                    
                                        <Paper style={{textAlign: 'center'},{padding: 10}}>
                                            <h2> {info.nombreJ} </h2>
                                            <h4>Consola: {info.nombreC}</h4>
                                            <h4>Dueño: {info.username}</h4>
                                            <a href="http://localhost:3000/register/interest">
                                                <h4>Hacer oferta</h4>
                                            </a>
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