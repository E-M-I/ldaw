import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import {CardContent, Container, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper }from '@material-ui/core';
import axios from 'axios';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

function tabla (){
    axios.get("http://localhost:8000/api/intereses")
          .then(function (resp){
            document.getElementById('tablaIntereses').innerHTML = resp.data;
          } );
}

export default function RegistrarIntereses() {
  const classes = useStyles();
  tabla();
  const [age,] = React.useState('');

  const handleChange = (event) => {
    document.getElementById('demo-simple-select-outlined').value = event.target.value;
  };



  const guardarDatos = (event) => {
      var x = 1;
      var y = document.getElementById('demo-simple-select-outlined').value;
    if(y > 0){
        const interes = {
        idTitulo: y,
        idUsuario: x,
        };
        axios.post("http://localhost:8000/api/intereses", interes)
          .then(function (resp){
            if(resp.data == 1){
                Swal.fire(
                    '¡Listo!',
                    'Nuevo Interés Guardado',
                    'success'
                    ).then(function() {
                    window.location = "http://localhost:3000/register/interest";
                    });
            }else{
                Swal.fire(
                    '¡Error!',
                    'Hubo un error al tratar de guardar tu interés. Verifica que no trates de registrar alguno repetido,',
                    'error'
                    ).then(function() {
                    window.location = "http://localhost:3000/register/interest";
                    });
            }
          } );
          
    }else{
        Swal.fire(
            '¡Error!',
            'Introduce Un Título de tu Interés',
            'error'
            )
    }
  };


  return (
    <div>
    <Container maxWidth="md">
        <h2 align="center">Títulos de interés</h2>
     <Card style={{ backgroundColor: '#7c7595'}}> 
     <h2 align="center">Registra Un Nuevo Título De Tu Interés</h2>
      <CardContent align="center">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Título</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Mario Kart</MenuItem>
          <MenuItem value={2}>God of War</MenuItem>
          <MenuItem value={3}>FIFA</MenuItem>
        </Select>
        <br/>
        <Button variant="contained" color="primary" align="center" onClick={guardarDatos}>
            Registrar Interés
        </Button>
      </FormControl>
        <br/>
        <br/>
        <br/>
        <h2 align="center">Tus intereses</h2>
        <br/>
        <Table className={classes.table} aria-label="simple table" id="tablaIntereses">

        </Table>
      </CardContent>
      </Card>
    </Container>
    </div>
  );
}