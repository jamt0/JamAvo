import React, { Component } from 'react'
import Servicio from './Servicio'
import './Servicios.css';
import { Row, Col, Container } from 'react-bootstrap'

export default class Servicios extends Component {
    render() {
        return (
            <div className="fondo">
            <div className="container-lg fondo">
                <div className="card-deck align-middle fondo-cards" style={{ marginTop: 20, marginBottom: 20 }}>
                    <Row>
                        <Col xs={12}>
                            <Container>
                                <Row>
                                    <Col sm={12} >
                                        <h3 className="text-center titulo-servicio">Servicios</h3>
                                    </Col>
                                    <Col sm={12}>
                                        <h5 className="text-center subtitulo-servicio">Hacemos que todos tus sueños se conviertan en estas realidades</h5>
                                    </Col>
                                    <Col sm={12} className="text-center">
                                        <hr style={{color: "#ffffff"}}></hr>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col sm={6} md={6} lg={3}>
                            <Servicio/>
                            <hr style={{color: "#ffffff"}}></hr>
                        </Col>
                        <Col sm={6} md={6} lg={3}>
                            <Servicio/>
                            <hr style={{color: "#ffffff"}}></hr>
                        </Col>
                        <Col sm={6} md={6} lg={3}>
                            <Servicio/>
                            <hr style={{color: "#ffffff"}}></hr>
                        </Col>
                        <Col sm={6} md={6} lg={3}>
                            <Servicio/>
                            <hr style={{color: "#ffffff"}}></hr>
                        </Col>
                    </Row>
                </div>
            </div>
            </div>
        )
    }
}
