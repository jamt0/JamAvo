import React, { Component } from 'react'
import Metodo from './Metodo';
import SearchIcon from '@material-ui/icons/Search';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import CodeIcon from '@material-ui/icons/Code';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export default class Metodos extends Component {

    contenidos = [
        {
            icono: <SearchIcon fontSize="large" style={{ fontSize: 60 }} className="icono rounded mx-auto mx-md-0 d-block" />,
            titulo: "Descubrimiento",
            descripcion: "Estudiamos el problema y/o necesidades profundamente para encontrar la solución más optima y que consuma menos recursos."
        },
        {
            icono: <MapOutlinedIcon fontSize="large" style={{ fontSize: 60 }} className="icono rounded mx-auto mx-md-0 d-block" />,
            titulo: "Planificación",
            descripcion: "Estructuramos la idea en un plan de trabajo y de este modo encontrar la mejor arquitectura en diseño y codigo. "
        },
        {
            icono: <CodeIcon fontSize="large" style={{ fontSize: 60 }} className="icono rounded mx-auto mx-md-0 d-block" />,
            titulo: "Desarrollo",
            descripcion: "Utilizamos las tecnologias más ágiles y robustas del momento con el fin de crear un producto eficiente y eficaz. "
        },
        {
            icono: <HelpOutlineIcon fontSize="large" style={{ fontSize: 60 }} className="icono rounded mx-auto mx-md-0 d-block" />,
            titulo: "Asesoramiento",
            descripcion: "Guiamos a nuestros clientes para que su producto final sea conocido por su público deseado y cumplir su propósito."
        },
    ]

    render() {
        return (
            <div className="card-deck">
                <div className="container"></div>
                <div className="row">
                    {this.contenidos.map((contenido) => {
                        return (
                            <div className="col-sm-12 col-md-6">
                                <Metodo icono={contenido.icono}
                                    titulo={contenido.titulo}
                                    descripcion={contenido.descripcion}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
