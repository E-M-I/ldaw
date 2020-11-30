import React, { useState, useEffect }from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '80%'
    },
    form: {
        display: 'block'
    }
}));

function RegistrarTituloForm() {
    const classes = useStyles();
    const [nombre, setNombre] = useState('');
    const [companias, setCompanias] = useState([]);
    const [companiaSelected, setCompaniaSelected] = useState('');
    const [generoSelected, setGeneroSelected] = useState('');
    const [generos, setGeneros] = useState([]);

    useEffect (() => {
        // GET de companias
        axios.get("http://localhost:8000/api/companias")
            .then(response => {
                setCompanias(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        
            //GET de generos
            axios.get("http://localhost:8000/api/generos")
            .then(response => {
                setGeneros(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleNombre = (e) => {
        setNombre(e.target.value)
    }

    const handleCompania = (e) => {
        let idCompania = e.target.value;
        setCompaniaSelected(idCompania);
    }

    const handleGenero = (e) => {
        let idGenero = e.target.value;
        setGeneroSelected(idGenero);
    }

    const handleRegistro = (e) => {
        const titulo = {
            nombre: nombre,
            idGenero: generoSelected,
            idCompania: companiaSelected
        }

        axios.post("http://localhost:8000/api/titulos", titulo)
            .then(response => {
                    Swal.fire('¡Listo!', 'Tu título ha sido registrado', 'success')
                        .then(() => (
                            window.location = "http://localhost:3000/register/title"
                        ))
                
            })
            .catch(error => {
                Swal.fire(
                    '¡Error!',
                    'Hubo un error al tratar de guardar tu título. Por favor verifica que hayas llenado todos los campos.',
                    'error'
                    ).then(() => (
                        window.location = "http://localhost:3000/register/title"
                    ));
            })
        console.log("nombre: "+nombre);
        console.log("idCompania: "+companiaSelected);
        console.log("idGenero: "+generoSelected);
    }

    return (
        <div>
            <TextField id="nombre-titulo" label="Nombre del título" value={nombre} onChange={handleNombre} /><br/>
            {/*
                SELECT DE GÉNEROS
            */}
            <FormControl className={classes.formControl} >
                <InputLabel htmlFor="grouped-select">Géneros</InputLabel>
                <Select defaultValue="" id="select-generos" onChange={handleGenero} name="select-generos">
                {
                    generos.map((item) => (
                        <MenuItem value={item.id}>{item.nombre}</MenuItem>
                    ))
                }
                </Select>
            </FormControl>

            {/*
                SELECT DE COMPAÑÍAS
            */}
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Compañías</InputLabel>
                <Select defaultValue="" id="select-companias" onChange={handleCompania} name="select-companias">
                {
                    companias.map((item) => (
                        <MenuItem value={item.id} key={item.id}>{item.nombre}</MenuItem>
                    ))
                }
                </Select>
            </FormControl>
            <div style={{textAlign: 'center', marginTop: '15px'}}>
                <Button variant="contained" color="primary" onClick={handleRegistro}>Registrar título</Button>
            </div>
        </div>
    )
}

export default RegistrarTituloForm
