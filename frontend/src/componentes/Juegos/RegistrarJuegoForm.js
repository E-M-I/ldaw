import React, { useState, useEffect }from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, ListSubheader, MenuItem, Select, TextField } from '@material-ui/core'


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
    const [titulos, setTitulos] = useState();
    const [consolas, setConsolas] = useState();
    const [usuarios, setUsuarios] = useState();
    const [nombre, setNombre] = useState();

    useEffect (() => {
        //Obtener Titulos
        axios.get('http://localhost:8000/api/titulos')
        .then(res => { 
            setTitulos(res.data);
        })
        .catch((e) => {
            console.log(e)
        })

        //Obtener Consolas
        axios.get('http://localhost:8000/api/consolas')
        .then(res => { 
            setConsolas(res.data);
        })
        .catch((e) => {
            console.log(e)
        })

        //Obtener Usuarios
        axios.get('http://localhost:8000/api/users')
        .then(res => {
            setUsuarios(res.data);
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);

    const handleNombre = (event) => {
        setNombre(event.target.value)
    }

    const handleTitulo = (event) => {
        setTitulos(event.target.value)
    }

    const handleConsola = (event) => {
        setConsolas(event.target.value)
    }

    const handleUsuario = (event) => {
        setUsuarios(event.target.value)
    }

    const handleSubmit = (event) => {
        const values = {
            nombre: nombre,
            idTitulo: titulos.id,
            idConsolas: consolas.id,
            idUsuario: usuarios.id
        }
        axios.post('http://localhost:8000/api/juegos', values, {headers: {"Accept": "application/json"}})
            .then(res => {

            })
            .catch(err => {
                console.log(err)
                props.history.push("/");

            });
    }

    return (
        <form className={classes.form}>
            <TextField id="nombre-juego" label="Nombre del juego" value={nombre} onChange={handleNombre}/><br/>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Títulos</InputLabel>
                <Select defaultValue="" id="grouped-select" onChange={titulos ?? handleTitulo}>
                { //MAP TITULOS
                    titulos ?
                    titulos.map((item) => (
                            <MenuItem value={item.id}>{item.nombre}</MenuItem>
                            )):
                            <div/> 
                        }
                </Select>
            </FormControl><br/>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Consolas</InputLabel>
                <Select defaultValue="" id="grouped-select" onChange={consolas ?? handleConsola}>
                { //MAP Consolas
                    consolas ?
                    consolas.map((item) => (
                        <MenuItem value={item.id}>{item.nombre}</MenuItem>
                    )):
                    <div/>
                                
                }
                </Select>
            </FormControl><br/>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Usuarios</InputLabel>
                <Select defaultValue="" id="grouped-select" onChange={usuarios ?? handleUsuario}>
                { //MAP TITULOS
                    usuarios ?
                    usuarios.map((item) => (
                        <MenuItem value={item.id}>{item.name}</MenuItem>
                    )):
                    <div/>         
                }
                </Select>
            </FormControl><br/>
            <div style={{textAlign: 'center'}}>

            <Button variant="contained" color="primary" onClick={handleSubmit}>Registrar</Button>
            </div>
        </form>
    )
}

export default withRouter(RegistrarJuegoForm)
