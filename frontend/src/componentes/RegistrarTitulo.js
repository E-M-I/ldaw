import { Container, CssBaseline, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        marginTop: '40px'
    },
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
}));
export default function RegistrarTitulo() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Paper className={classes.pageContent}>
                <h1>Registrar Título</h1>
            </Paper>
        </Container>
    )
}
