import React, { Component } from 'react'
import Contenido from './ContenidoPortafolio'
import './Portafolio.css';

export default class Portafolio extends Component {

    contenidos = [
        { titulo: "Todo", id: "tab-todo", href: "#todo", controls: "todo", class: "nav-link ", select: "false", class2: "tab-pane fade " },
        { titulo: "Páginas web", id: "tab-web", href: "#web", controls: "web", class: "nav-link active", select: "true", class2: "tab-pane fade show active" },
        { titulo: "Apps Moviles", id: "tab-movile", href: "#movile", controls: "movile", class: "nav-link", select: "false", class2: "tab-pane fade" },
        { titulo: "Apps escritorio", id: "tab-escritorio", href: "#escritorio", controls: "escritorio", class: "nav-link", select: "false", class2: "tab-pane fade" },
        { titulo: "Contenido digital", id: "tab-digital", href: "#digital", controls: "digital", class: "nav-link", select: "false", class2: "tab-pane fade" },
        { titulo: "Marketing", id: "tab-marketing", href: "#marketing", controls: "marketing", class: "nav-link", select: "false", class2: "tab-pane fade" },
        { titulo: "Videojuegos", id: "tab-juego", href: "#juego", controls: "juego", class: "nav-link", select: "false", class2: "tab-pane fade" },
    ]

    render() {
        return (
            <div className="container-fluid caja1" id="portafolio">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="titulo1 text-center font-weight-bold" >Portafolio</h3>
                        </div>
                        <div className="col-12">
                            <h5 className="text-center subtitulo1">Demostramos nuestro profesionalismo con resultados</h5>
                        </div>
                        <div className="col-12">
                            <hr className="linea2"></hr>
                        </div>
                    </div>
                    <div className="row espaciado-portafolio">
                    </div>
                    </div>
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
                                {this.contenidos.map((contenido, key) => {
                                    return (
                                        <li className="nav-item" key={key}>
                                            <a className={contenido.class} id={contenido.id} data-toggle="pill"
                                                href={contenido.href} role="tab" aria-controls={contenido.controls}
                                                aria-selected={contenido.select}>{contenido.titulo}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="row espaciado-portafolio">
                    </div>
                    <div className="caja-proyectos" id="pills-tabContent">
                        <div className="tab-content caja-proyecto" id="pills-tabContent">
                            {this.contenidos.map((contenido, key) => {
                                return (
                                    <div className={contenido.class2} id={contenido.controls}
                                        role="tabpanel" aria-labelledby={contenido.id} key={key}>
                                        <Contenido tipo={contenido.controls} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

