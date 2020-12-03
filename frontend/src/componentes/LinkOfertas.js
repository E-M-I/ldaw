import React, { Component } from 'react';
import {Button}from '@material-ui/core';

class LinkOfertas extends Component{
    owner = this.props.owner;
    juegoId = this.props.juegoId;
    consola = this.props.consola;
    nombreJ = this.props.nombreJ;
    dir = "http://localhost:3000/realizarOferta/"+this.owner+"/"+this.juegoId+"/"+this.consola+"/"+this.nombreJ;
    render(){
        return(
            <a href={this.dir}>
                <Button variant="contained" size="small" color="primary">
                    Hacer oferta
                </Button>
            </a>
        )
    } 
}
export default LinkOfertas;