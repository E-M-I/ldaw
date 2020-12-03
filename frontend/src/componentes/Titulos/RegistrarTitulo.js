import React from 'react'
import { CssBaseline, Divider, makeStyles, Typography } from "@material-ui/core";
import { Container, InputLabel, MenuItem, Paper, Select } from '@material-ui/core';
import AppDrawer from '../AppDrawer';
import RegistrarTituloForm from './RegistrarTituloForm';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        marginTop: '60px'
    },
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    title: {
        textAlign: 'center'
    },
    divider: {
        marginTop: '20px',
        marginBottom: '20px',
    }
}));

function RegistrarTitulo(props) {
    const classes = useStyles();
    if(localStorage.getItem('idRol') == 2) {
        return (
            <div className={classes.container} >
                
                <CssBaseline />
                <AppDrawer />
                <Container >
                    <Paper className={classes.pageContent}>
                        <Typography variant="h4" className={classes.title}>Registrar Título</Typography>
                        <Divider className={classes.divider}/>
                        <RegistrarTituloForm />
                    </Paper>
                </Container>
            </div>
        )

    } else {
        window.location.replace("http://localhost:3000/")
    }
}

export default RegistrarTitulo;

