import React from 'react'
import { CssBaseline, Divider, makeStyles, Typography } from "@material-ui/core";
import { Container, InputLabel, MenuItem, Paper, Select } from '@material-ui/core';
import RegistrarJuegoForm from './RegistrarJuegoForm';
import AppDrawer from '../AppDrawer';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        marginTop: '60px'
    },
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        backgroundColor: '#38405f'
    },
    title: {
        textAlign: 'center',
        color: 'white'
    },
    divider: {
        marginTop: '20px',
        marginBottom: '20px',
    }
}));

function RegistrarJuego(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <CssBaseline />
            <AppDrawer />
            <Container >
                <Paper className={classes.pageContent}>
                    <Typography variant="h4" className={classes.title}>Registrar Juego</Typography>
                    <Divider className={classes.divider}/>
                    <RegistrarJuegoForm />
                </Paper>
            </Container>
        </div>
    )
}

export default RegistrarJuego;

