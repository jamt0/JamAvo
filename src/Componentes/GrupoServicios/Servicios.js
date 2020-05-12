import React, { Component } from 'react'
import './Servicios.css';

export default class Servicios extends Component {

    contenidos = [{
        titulo: "Desarrollo Aplicaciones",
        img: "../../Img/Servicio1.png",
        descripcion:"Sitios web responsive, aplicaciones moviles y de escritorio, sistemas de gestión."
    }, {
        titulo: "Desarrollo Videojuegos",
        img: "../../Img/Servicio1.png",
        descripcion:"Videojuegos en 2D Y 3D multi-plataforma, y cualquier género. "
    }, {
        titulo: "Contenido audiovisual",
        img: "../../Img/Servicio1.png",
        descripcion:"Videos, Imagenes, animaciones 2D y 3D, contenido para redes sociales."
    }, {
        titulo: "Marketing digital",
        img: "../../Img/Servicio1.png",
        descripcion:"Posicionamiento de marca, SEO, anuncios, gestión CRM, campañas publicitarias."
    }]

    render() {
        return (
            <div className="fondo " style={{ paddingTop: 60, paddingBottom: 60 }} id="servicios">
                <div className="container">
                    <div className="row">
                        <div className="col-12" >
                            <h3 className="text-center titulo-servicio font-weight-bold" id="servicios">Servicios</h3>
                        </div>
                        <div className="col-12">
                            <h5 className="text-center subtitulo-servicio">Hacemos que todos tus sueños se conviertan en estas realidades</h5>
                        </div>
                        <div className="col-12">
                            <hr className="linea"></hr>
                        </div>
                    </div>
                </div>
                <div className="container-fluid d-flex align-items-stretch justify-content-center">
                    <div className=" row fondo-servicios d-flex justify-content-around align-items-center">
                        {this.contenidos.map((contenido, key) => {
                            return (
                                <div className=" col-sm-12 col-md-6 col-lg-3 flex-column" key={key}>
                                    <div className="fondo-img d-flex justify-content-center fondo-img-servicios">
                                        <img src={contenido.img} className="img-servicio" alt="Imagen servicio jamavo"></img>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center fondo-texto-servicios">
                                        <h5 className="text-center titulo-servicio font-weight-bold ">{contenido.titulo}</h5>
                                        <h6 className="text-center titulo-servicio ">{contenido.descripcion}</h6>
                                    </div>
                                    <hr className="linea"/>
                                </div>
                            ) 
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
