import React, { Component } from 'react'

import Individuo from './Individuo';
import Metodos from './Metodos';
import { Col, Row } from 'react-bootstrap';

import './SobreNosotros.css';

export default class SobreNosotros extends Component {

    contenidos = [{ nombre: "Jonathan Mancera", descripcion: "Analista programador, Programador frontend y backend en aplicaciones moviles, webs y escritorio con integración de ingeligencia artificial. Diseñador UI y UX. Desarrollador de videojuegos. Administrador bases de datos y servidores. Animador y modelador 2D y 3D" },
    { nombre: "Leonardo Santos", descripcion: "Programador frontend y backend en aplicaciones de realidad virtual, web y escritorio. Modelador 3D, creador Contenidos Digitales y Ecommerce Manager" },
    { nombre: "Milagros Baez", descripcion: "Community Manager, Diseñadora UI y UX, Consultor SEO, Analista Digital, Creadora Contenidos Digitales y Ecommerce Manager" },
    { nombre: "Nahir Cifuentes", descripcion: "Programadora frontend y backend en aplicaciones web, moviles y escritorio. Diseñadora UI y UX" },
    { nombre: "Alejandro Saveedra", descripcion: "Programador frontend y backend en aplicaciones web, moviles y escritorio. Administrador bases de datos y servidores " }]

    render() {
        return (
            <div className="fondo-equipo">
                <div className="container">
                    <div className="row espaciado-SobreNosotros">
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="titulo-sobreNosotros text-center font-weight-bold">Sobre Nosotros</h3>
                        </div>
                        <div className="col-12">
                            <h5 className="text-center subtitulo-sobreNosotros">Nuestros métodos crean un perfecto flujo de trabajo</h5>
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
                                                    {this.contenidos.map((contenido) => {
                                                        return (
                                                            <Col sm={6} md={6} lg={4}>
                                                                <Individuo nombre={contenido.nombre} descripcion={contenido.descripcion} />
                                                            </Col>
                                                        )
                                                    })}
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

