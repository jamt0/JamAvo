import React, { Component } from 'react'

import Individuo from './Individuo';
import Metodos from './Metodos';
import { Col, Row } from 'react-bootstrap';

import './SobreNosotros.css';

export default class SobreNosotros extends Component {

    render() {
        return (
            <div className="fondo-equipo">
                <div className="container">
                    <div className="row espaciado-SobreNosotros">
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="titulo-sobreNosotros text-center">Sobre Nosotros</h3>
                        </div>
                        <div className="col-12">
                            <h5 className="text-center subtitulo-sobreNosotros">Hacemos que todos tus sueños se conviertan en estas realidades</h5>
                        </div>
                        <div className="col-12">
                            <hr style={{ color: "#ffffff" }}></hr>
                        </div>
                    </div>
                    <Row>
                        <Col sm={12} lg={8} >
                            <Metodos />
                        </Col>
                        <Col className="fondo-imgsn" sm={12} lg={4}>
                            <img src="../../Img/ImagenSobreNosotrs.png" className="card-img-top imagen-equipo rounded mx-auto d-block" alt="Imagen sobre nosotros jamavo" />
                        </Col>
                    </Row>
                    <div className="row espaciado-SobreNosotros2">
                    </div>
                    <Row>
                        <Col>
                            <div className="accordion" id="accordionExample">
                                <div className="card acordion">
                                    <div className="card-header acordion" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn btn-block acordion-boton" 
                                                type="button" data-toggle="collapse" 
                                                data-target="#collapseOne" aria-expanded="true" 
                                                aria-controls="collapseOne">
                                                Nuestro equipo de trabajo
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="container">
                                                <div className="row">
                                                    <Col sm={6} md={6} lg={3}>
                                                        <Individuo></Individuo>
                                                    </Col>
                                                    <Col sm={6} md={6} lg={3}>
                                                        <Individuo></Individuo>
                                                    </Col>
                                                    <Col sm={6} md={6} lg={3}>
                                                        <Individuo></Individuo>
                                                    </Col>
                                                    <Col sm={6} md={6} lg={3}>
                                                        <Individuo></Individuo>
                                                    </Col>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="row espaciado-SobreNosotros3">
                    </div>
                </div>
            </div>
        )
    }
}

