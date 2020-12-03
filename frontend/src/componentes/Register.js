import React,{useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert2'
import {makeStyles} from '@material-ui/core/styles'
import { Button, Container, CssBaseline, Divider, Paper, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  container: {
    display: 'flex',
    marginTop: '60px'
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  title: {
    textAlign: 'center' 
  },
  divider: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  button: {
    textAlign: 'center',
    marginTop: '15px'
  }
}))
function Register(props) {
  const history = props.history;
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [fechaNacimiento,setDate] = useState('');
  const [telefono,setPhone] = useState('');
  const classes = useStyles();

  const handleName = (e)=>{
    setName(e.target.value)
  }

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  const handlePhone = (e)=>{
    setPhone(e.target.value)
  }

  const handleDate = (e)=>{
    setDate(e.target.value)
  }

  const handleSignup = (e)=>{
    const credentials = {
        name: name,
        email: email, 
        password: password,
        fechaNacimiento: fechaNacimiento,
        telefono: telefono
    }
    axios.post('http://localhost:8000/api/account/register', credentials)
      .then(response=>{
        
        history.push('/login')
      })
      .catch(error=>{
        console.log(error)
      })
  }

  return (
    <div className={classes.container}>
      <CssBaseline/>
      <Container>
        <Paper className={classes.pageContent}>
          <Typography variant='h4' className={classes.title}>Crea tu cuenta</Typography>
          <Divider className={classes.divider}/>
          <div style={{alignContent: 'center', textAlign: 'center'}}>
            <TextField id='name' label='Nombre Completo' value={name} onChange={handleName}/><br/>
            <TextField id='email' label='Correo Electrónico' value={email} onChange={handleEmail}/><br/>
            <TextField id='telefono' label='Teléfono' value={telefono} onChange={handlePhone}/><br/>
            <TextField id='password' label='Contraseña' value={password} onChange={handlePassword} type='password'/><br/>
            <TextField id='fechaNacimiento' value={fechaNacimiento} onChange={handleDate} type='date'/><br/>
          </div>
          <div className={classes.button}>
            <Button variant='contained' color='primary' onClick={handleSignup} >Registrar Cuenta</Button><br />
            <Button color='default' onClick={() => history.push('/login')} >Iniciar Sesión</Button>
          </div>
        </Paper>
      </Container>
    </div>
  )
}

export default withRouter(Register)