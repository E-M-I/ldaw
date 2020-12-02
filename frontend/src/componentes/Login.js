/*import React, { Component } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import Swal from 'sweetalert2';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit(event) {

    console.log(this.state.email)
    console.log(this.state.password)
    localStorage.setItem('email', this.state.email);

    event.preventDefault();
    axios.post('http://localhost:8000/api/auth/login', {
      email: this.state.email,
      password: this.state.password,
    }).then(function (res) {
      console.log(res)
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('auth', true);
      window.location = "http://localhost:3000/registrado";
    }).catch(function (err) {
      console.log(err)
      localStorage.setItem('auth', false);
      Swal.fire(
        'ERROR',
        'Usuario y/o contraseña incorrecto',
        'error'
      )
    })



    event.preventDefault();
  }

  render() {

    return (
      <div class="content">
        <div class="container dflex">
          <div class="row">
            <div class="col-12" >
              <br /><br />

              <div class="row justify-content-center">


              </div>
              <br />
              <h1 className="title">GAMECH</h1>
              <Form>
                <div class="row justify-content-center">
                  <div class="col-4" >
                    <Form.Group controlId="formBasicEmail" style={{ width: '300px' }}>. <Form.Label>Correo:</Form.Label>
                      <Form.Control type="text" placeholder="mariaSandoval@gmail.com" name="email" value={this.state.email} onChange={this.onChange} />
                    </Form.Group>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-4" >
                    <Form.Group controlId="formBasicPassword" style={{ width: '300px' }}>
                      <Form.Label>Contraseña:</Form.Label>
                      <Form.Control type="password" placeholder="" name="password" value={this.state.password} onChange={this.onChange} />
                    </Form.Group>
                  </div>
                </div>
                <div class="row justify-content-center">

                  <div class="col-4" align="center">

                    <Row>
                      <Col><Link to="/">
                        <Button >Regresar</Button>
                      </Link> </Col>
                      <Col>
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                          Iniciar Sesión
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </div>

                <br />

              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}*/
/*handleSubmit(event) {
  event.preventDefault();
  var pass = document.getElementById("password").value;
  var correo = document.getElementById("email").value;
  const usuario ={
    email: correo,
    password:pass
  }
  axios.post('http://localhost:8000/api/auth/login', usuario)
  .then((response) => {
    const token = response.data.token;
   this.setState.isAuthenticated=true;
   console.log(token);
})

  .catch((error) => {
      console.log(error);
  });
}*/
