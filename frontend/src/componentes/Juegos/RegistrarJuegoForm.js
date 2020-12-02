import React, { useState, useEffect }from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, ListSubheader, MenuItem, Select, TextField } from '@material-ui/core'
import Swal from 'sweetalert2';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '80%',
    },
    form: {
        display: 'block'
    }
}));

function RegistrarJuegoForm(props) {
    const classes = useStyles();
    const [titulos, setTitulos] = useState([]);
    const [consolas, setConsolas] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState();
    const [tituloSelected, setTituloSelected] = useState('');
    const [consolaSelected, setConsolaSelected] = useState('');
    const [usuarioSelected, setUsuarioSelected] = useState('');

    useEffect (() => {
        //Obtener Titulos
        axios.get('http://localhost:8000/api/titulos')
        .then(res => { 
            setTitulos(res.data);
        })
        .catch((e) => {
            console.log(e);
        })

        //Obtener Consolas
        axios.get('http://localhost:8000/api/consolas')
        .then(res => { 
            setConsolas(res.data);
        })
        .catch((e) => {
            console.log(e);
        })

        //Obtener Usuarios
        axios.get('http://localhost:8000/api/users')
        .then(res => {
            setUsuarios(res.data);
        })
        .catch((e) => {
            console.log(e);
        })
    }, []);

    const handleNombre = (event) => {
        setNombre(event.target.value);
    }

    const handleTitulo = (event) => {
        let idTitulo = event.target.value;
        setTituloSelected(event.target.value);
    }

    const handleConsola = (event) => {
        let idConsola = event.target.value;
        setConsolaSelected(idConsola);
    }

    const handleUsuario = (event) => {
        let idUsuario = event.target.value;
        setUsuarioSelected(idUsuario);
    }

    const handleSubmit = (event) => {
        const juego = {
            nombre: nombre,
            idTitulo: tituloSelected,
            idConsolas: consolaSelected,
            idUsuario: usuarioSelected
        }
        axios.post('http://localhost:8000/api/juegos', juego)
            .then(response => {
                Swal.fire('¡Listo!', 'Tu juego ha sido registrado', 'success')
                    .then(() => (
                        window.location = "http://localhost:3000/register/game"
                    ))
            
            })
            .catch(error => {
                Swal.fire(
                    '¡Error!',
                    'Hubo un error al tratar de guardar tu juego. Por favor verifica que hayas llenado todos los campos.',
                    'error'
                    ).then(() => (
                        window.location = "http://localhost:3000/register/game"
                ));
            })
    }

    return (
        <form className={classes.form}>
            <TextField id="nombre-juego" label="Nombre del juego" value={nombre} onChange={handleNombre}/><br/>
            {/*
                SELECT DE TÍTULOS
            */}
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="grouped-select">Títulos</InputLabel>
                <Select defaultValue="" id="select-titulos" onChange={handleTitulo} name="select-titulos">
                {
                    titulos.map((item) => (
                        <MenuItem value={item.id}>{item.nombre}</MenuItem>
                    ))
                }
                </Select>
            </FormControl>

            {/*
                SELECT DE CONSOLAS
            */}
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Consolas</InputLabel>
                <Select defaultValue="" id="select-consolas" onChange={handleConsola} name="select-consolas">
                {
                    consolas.map((item) => (
                        <MenuItem value={item.id} key={item.id}>{item.nombre}</MenuItem>
                    ))
                }
                </Select>
            </FormControl>

            {/*
                SELECT DE USUARIOS
            */}
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Usuarios</InputLabel>
                <Select defaultValue="" id="select-usuarios" onChange={handleUsuario} name="select-usuarios">
                {
                    usuarios.map((item) => (
                        <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                    ))
                }
                </Select>
            </FormControl>

            <div style={{textAlign: 'center', marginTop: '15px'}}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Registrar juego</Button>
            </div>
        </form>
    )
}

export default withRouter(RegistrarJuegoForm)
