import React, { Component } from 'react'
import './BarraNav.css';


export default class BarraNav extends Component {

    contenidos = [{ titulo: "Inicio", href: "#Inicio" },
    { titulo: "Servicios", href: "#servicios" },
    { titulo: "Portafolio", href: "#portafolio" },
    { titulo: "Sobre Nosotros", href: "#sobreNosotros" },
    { titulo: "Contactanos", href: "#contactanos" }]

    render() {
        return (
            <div>
                <nav className="navbar barra navbar-expand-lg navbar-dark fixed-top">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-start caja-brand">
                            <a className="navbar-brand" href="#Inicio">
                                <img src="../../Img/Logo.png"
                                    width="35"
                                    height="35"
                                    className="d-inline-block align-middle"
                                    alt="Logo jamavo" />
                            </a>
                            <a className="navbar-brand texto-marca align-bottom font-weight-bold" href="#Inicio">Jam Avo</a>
                        </div>
                        <button className="navbar-toggler collapsed span-boton"
                            type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="container-fluid caja-opcion">
                            <div className="collapse navbar-collapse text-center caja-opcion2" id="navbarNavAltMarkup">
                                <div className="navbar-nav ml-auto">
                                    {this.contenidos.map((contenido, key) => {
                                        if (window.innerWidth < 992) {
                                            return (
                                                <button className="nav-link nav-item btn btn-link boton-opcion texto-opcion"
                                                    data-toggle="collapse" data-target="#navbarNavAltMarkup"
                                                    aria-expanded="true" aria-controls="navbarNavAltMarkup" key={key}>
                                                    <a href={contenido.href} className="btn btn-block py-2 texto-opcion">
                                                        {contenido.titulo}
                                                    </a>
                                                </button>
                                            )
                                        } else {
                                            return (
                                                <a href={contenido.href} className="nav-link nav-item btn btn-link 
                                                    boton-opcion texto-opcion px-3 py-1" key={key}>
                                                    {contenido.titulo}
                                                </a>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
