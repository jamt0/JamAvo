import React, { Component } from 'react'

import Individuo from './Individuo';
import Metodos from './Metodos';

import './SobreNosotros.css';

export default class SobreNosotros extends Component {

    contenidos = [{ nombre: "Jonathan Mancera", descripcion: "Analista programador, Programador frontend y backend en aplicaciones moviles, webs y escritorio con integración de ingeligencia artificial. Diseñador UI y UX. Desarrollador de videojuegos. Administrador bases de datos y servidores. Animador y modelador 2D y 3D" },
    { nombre: "Leonardo Santos", descripcion: "Programador frontend y backend en aplicaciones de realidad virtual, web y escritorio. Modelador 3D, creador Contenidos Digitales y Ecommerce Manager" },
    { nombre: "Milagros Baez", descripcion: "Community Manager, Diseñadora UI y UX, Consultor SEO, Analista Digital, Creadora Contenidos Digitales y Ecommerce Manager" },
    { nombre: "Nahir Cifuentes", descripcion: "Programadora frontend y backend en aplicaciones web, moviles y escritorio. Diseñadora UI y UX" },
    { nombre: "Alejandro Saveedra", descripcion: "Programador frontend y backend en aplicaciones web, moviles y escritorio. Administrador bases de datos y servidores " }]

    render() {
        return (
            <div className="fondo-equipo" style={{ paddingTop: 10, marginBottom: 20 }} id="sobreNosotros">
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
                            <hr className="linea"></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-8">
                            <Metodos />
                        </div>
                        <div className="col-sm-12 col-lg-4 fondo-imgsn" sm={12} lg={4}>
                            <img src="../../Img/ImagenSobreNosotrs.png" className="card-img-top imagen-equipo rounded mx-auto d-block" alt="Imagen sobre nosotros jamavo" />
                        </div>
                    </div>
                    <div className="row espaciado-SobreNosotros2">
                    </div>
                    <div className="row">
                        <div className="col">
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
                                                    {this.contenidos.map((contenido, key) => {
                                                        return (
                                                            <div className="col-sm-6 col-md-6 col-lg-4" key={key}>
                                                                <Individuo nombre={contenido.nombre} descripcion={contenido.descripcion}  />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row espaciado-SobreNosotros3">
                    </div>
                </div>
            </div>
        )
    }
}

