import React from 'react';
import  { Redirect } from 'react-router-dom'
import {Button} from '@material-ui/core'


const Logout = () => {
    const logout = () => {
        localStorage.clear()
        window.location ="http://localhost:3000/";
    };
      if(!localStorage.getItem('token')){
        return <Redirect to='/login'/>
    }
    return (
        <Button color="primary" style={{marginLeft: "20px"}} variant='contained' onClick={logout}>Logout</Button>

      );
};

export default Logout;