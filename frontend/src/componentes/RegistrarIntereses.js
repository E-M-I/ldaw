import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import {CardContent, Container, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper }from '@material-ui/core';
import axios from 'axios';
import AppDrawer from './AppDrawer';
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

function crearSelect(){
  var sel='<option value="0"><None</option>';
  const num=1;
  axios.get("http://localhost:8000/api/titulos")
    .then(function (resp){
      console.log(resp.data);
      //Ciclo for para obtener cada uno de los elementos
      resp.data.forEach(element => {
       sel = sel.concat('<option value="' + element.id + '"> ' + element.nombre + '</option> ');
      });
      //insertar el select en el html
     document.getElementById("demo-simple-select-outlined").innerHTML = sel;
    } );
}

function tabla (){
  var idU;
        axios.get("http://localhost:8000/api/account/"+localStorage.getItem('email').toString())
          .then(response => {
              localStorage.setItem('rol', response.data[0].idRol);
              idU = response.data[0].id;
              axios.get("http://localhost:8000/api/intereses/personal/"+response.data[0].id)
          .then(function (resp){
            document.getElementById('tablaIntereses').innerHTML = resp.data;
          } );
          })
          .catch(error => {
              console.log(error);
          });
    
}

export default function RegistrarIntereses() {
  const classes = useStyles();
  crearSelect()
  tabla();
  const [age,] = React.useState('');

  const handleChange = (event) => {
    document.getElementById('demo-simple-select-outlined').value = event.target.value;
  };



  const guardarDatos = (event) => {
    var idU;
    axios.get("http://localhost:8000/api/account/"+localStorage.getItem('email').toString())
      .then(response => {
          localStorage.setItem('rol', response.data[0].idRol);
          var idT = document.getElementById('demo-simple-select-outlined').value;
    if(idT > 0){
        const interes = {
        idTitulo: idT,
        idUsuario: response.data[0].id,
        };
        console.log(idT);
        console.log(response.data[0].id)
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
      })
      .catch(error => {
          console.log(error);
      });
      
  };


  return (
    <div>
      <AppDrawer />
      <br/>
      <br/>
      <br/>
    <Container maxWidth="md">
        <h2 align="center">Títulos de interés</h2>
     <Card style={{ backgroundColor: '#38405F'}}> 
     <h2 align="center">Registra Un Nuevo Título De Tu Interés</h2>
      <CardContent align="center">
      <FormControl variant="outlined" className={classes.formControl}>
        <h3>Título</h3>
        <select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" onChange={handleChange} label="Age">
        </select>


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