import React,{useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import {makeStyles} from '@material-ui/core/styles'
import { Button, Container, CssBaseline, Divider, Paper, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  container: {
    display: 'flex',
    marginTop: '60px'
  },
  pageContent: {
    padding: theme.spacing(3),
    minWidth: '10px',
    marginLeft: '10px',
    overflow: 'hidden'
  },
  title: {
    textAlign: 'center' 
  },
  divider: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  button: {
    marginRight: theme.spacing(2),
    textAlign: 'center',
    marginTop: '15px'
  }
}))
function Login(props) {
  const history = props.history;
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const classes = useStyles();

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  const handleLogin = (e)=>{
    const credentials = {
      email: email, 
      password: password
    }
    axios.post('http://localhost:8000/api/auth/login', credentials)
      .then(response=>{
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('auth', true);
        localStorage.setItem('email', email);
        Swal.fire('¡Bienvenido!', 'Has iniciado sesión', 'success')
        .then(() => (
            window.location ="http://localhost:3000/"
        ))
        
      })
      .catch(error=>{
        console.log(error)
        Swal.fire(
          '¡Error!',
          'Hubo un error al tratar de iniciar sesión. Por favor verifica tus datos.',
          'error'
          ).then(() => (
              window.location = "http://localhost:3000/login"
          ));
      })
  }


  return (
    <div className={classes.container}>
      <CssBaseline/>
      <Container>
        <Paper className={classes.pageContent}>
          <Typography variant='h4' className={classes.title}>Iniciar Sesión</Typography>
          <Divider className={classes.divider}/>
          <div style={{alignContent: 'center', textAlign: 'center'}}>
            <TextField id='email' label='Correo Electrónico' value={email} onChange={handleEmail}/><br/>
            <TextField id='password' label='Contraseña' value={password} onChange={handlePassword} type='password'/><br/>
          </div>
          <div className={classes.button}>
            <Button variant='contained' color='primary' onClick={handleLogin} >Iniciar Sesión</Button><br/>
            <Button  color='default' onClick={() => history.push('/register')} style={{marginTop: '10px'}}>¡Regístrate!</Button>
          </div>
        </Paper>
      </Container>
    </div>
  )
}

export default withRouter(Login)
