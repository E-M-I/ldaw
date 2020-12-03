import { Container, CssBaseline, Paper, Typography } from '@material-ui/core'
import React,  {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core'
import AppDrawer from './AppDrawer';
import Logout from './Logout'
import axios from 'axios'
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

export default function Home() {
    const classes = useStyles();
    const [name, setName] = useState('')
    useEffect (() => {
        axios.get("http://localhost:8000/api/account/"+localStorage.getItem('email').toString())
          .then(response => {
              localStorage.setItem('rol', response.data[0].idRol);
              setName(response.data[0].name);
          })
          .catch(error => {
              console.log(error);
          });
    }, []);
    return (
        <div className={classes.container}>
            {console.log(name)}
            <CssBaseline />
            <AppDrawer />
            <Container>
                <Paper className={classes.pageContent}>
                    <Typography variant="h4" className={classes.title}>Bienvenido, {name}</Typography>
                </Paper>
            </Container>
        </div>
    )
}
