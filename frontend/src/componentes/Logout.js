import React from 'react';
import  { Redirect } from 'react-router-dom'
import {Button} from '@material-ui/core'
import Swal from 'sweetalert2'

const Logout = () => {
    const logout = () => {
        localStorage.clear()
        Swal.fire('¡Adiós, vuelve pronto!', 'Has cerrado sesión', 'success')
        .then(() => (
            window.location ="http://localhost:3000/"
        ))
        
    };
      if(!localStorage.getItem('token')){
        return <Redirect to='/login'/>
    }
    return (
        <Button color="primary" variant='contained' onClick={logout}>Logout</Button>

      );
};

export default Logout;