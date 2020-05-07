import React, { Component } from 'react'
import './BarraNav.css';

export default class BarraNav extends Component {
    render() {
        return (
            <div className="barra">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#614D66" }}>
                    <div className="container">
                        <a className="navbar-brand" href="#Inicio">
                            <img src="../../logo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Logo" />
                        </a>
                        <a className="navbar-brand" href="#Inicio">Jam Avo</a>
                        <button className="navbar-toggler"
                            type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="container">
                            <div className="collapse navbar-collapse text-right" id="navbarNavAltMarkup">
                                <div className="navbar-nav ml-auto">
                                    <a className="nav-item nav-link active" href="#Inicio">Inicio</a>
                                    <a className="nav-item nav-link" href="#Servicios">Servicios</a>
                                    <a className="nav-item nav-link" href="#Portafolio">Portafolio</a>
                                    <a className="nav-item nav-link" href="#Sobre Nosotros">Sobre Nosotros</a>
                                    <a className="nav-item nav-link" href="#Contactanos">Contactanos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
