import React from 'react';
import  { Redirect } from 'react-router-dom'
import {Button} from '@material-ui/core'


const Logout = () => {
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("auth");

        window.location ="http://localhost:3000/";
    };
      if(!localStorage.getItem('token')){
        return <Redirect to='/login'/>
    }
    return (
        <Button color="primary" variant='contained' onClick={logout}>Logout</Button>

      );
};

export default Logout;