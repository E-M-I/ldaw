import React, { Component } from 'react';
import { Button, Container, Form, Card, Row, Col } from 'react-bootstrap';

class RegistrarTitulo extends React.Component{
    render(){
        return(
            <Container>
                <br/>
                <br/>
                <h2 align="center">Registro de Títulos</h2>
                <br/>
                <br/>
                <Card>
                    <Card.Body>
                    <Form>
                        <div align="center">
                        <Row>
                        <Col  md={{ span: 6, offset: 3 }}>
                            <Form.Group >
                              <Form.Label>Nombre del Juego</Form.Label>
                              <Form.Control type="text" placeholder="God of War" />
                            </Form.Group>
                        </Col>
                        </Row>  
                        </div>
                        <div align="center">
                        <Row>
                        <Col  md={{ span: 6, offset: 3 }}>
                         <Form.Group >
                              <Form.Label>Selecciona su Género</Form.Label>
                              <Form.Control as="select">
                                <option>Default select</option>
                                <option>Activision</option>
                                <option>Electronic Arts</option>
                                <option>Nintendo</option>
                                <option>Microsoft</option>
                                <option>Sony</option>
                                <option>Bethesda</option>
                                <option>Blizzard</option>
                                <option>Riot Games</option>
                                <option>SEGA</option>
                                <option>Square Enix</option>
                                <option>Lego</option>
                                <option>Warner Bros</option>
                                <option>Rockstar</option>
                                <option>Capcom</option>
                                <option>Red Barrels</option>
                                <option>Konami</option>
                                <option>Bandai Namco</option>
                                <option>InnerSloth</option>
                                <option>Naughty Dog</option>
                              </Form.Control>
                         </Form.Group>
                        </Col>
                        </Row>
                        </div>
                        <div align="center">
                        <Row>
                        <Col  md={{ span: 6, offset: 3 }}>
                        <Form.Group >
                          <Form.Label>Selecciona su Compañía Desarrolladora</Form.Label>
                          <Form.Control as="select">
                            <option>Default select</option>
                            <option>First Person Shooter</option>
                            <option>Third Person Shooter</option>
                            <option>MOBA</option>
                            <option>MMORPG</option>
                            <option>Terror</option>
                            <option>Survival Horror</option>
                            <option>Sports</option>
                            <option>Table Games</option>
                            <option>Fighting</option>
                            <option>Arcade</option>
                            <option>Action</option>
                            <option>Bullet Hell</option>
                            <option>Adventure</option>
                            <option>Strategy</option>
                            <option>Racing</option>
                            <option>Open World</option>
                            <option>Beat 'Em Up</option>
                            <option>Platform</option>
                          </Form.Control>
                        </Form.Group>
                        </Col>
                        </Row>
                        </div>
                        <div align="center">
                            <Form.Group>
                            <Form.Label align="centers">Selecciona la portada del juego</Form.Label>
                            </Form.Group>
                        </div>
                        <div >
                         <Row>
                            <Col xs={4} md={{  offset: 4 }}>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1"/>
                                </Form.Group>
                            </Col>
                         </Row>
                        </div>
                        <div align="center">
                            <Button variant="primary" type="submit" >
                              Registrar Título
                            </Button>
                        </div>
                    </Form>     
                    </Card.Body>
                </Card>
            
            </Container>
        )
    }

}

export default RegistrarTitulo;