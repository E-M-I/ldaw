import React, { Component } from 'react';
import {Button}from '@material-ui/core';

class BotonAccionesOferta extends Component{
    id = this.props.id;
    oJuego = this.props.oJuego;
    tJuego = this.props.tJuego;
    status = this.props.status;
    color = this.props.color;
    dir = "http://localhost:3000/offers/actions/"+this.id+"/"+this.status+"/"+this.tJuego+"/"+this.oJuego;
    render(){
        return(
            <div>
                <a href={this.dir}>
                <Button variant="contained" size="small" color={this.color}>
                    {this.status}
                </Button>
                </a>
            </div>
        )
    } 
}
export default BotonAccionesOferta;