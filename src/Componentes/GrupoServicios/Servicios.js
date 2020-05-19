import React, { Component } from 'react'
import './Servicios.css';

export default class Servicios extends Component {

    contenidos = [{
        titulo: "Desarrollo Aplicaciones",
        img: "../../Img/Servicio2.png",
        descripcion: "Sitios web responsive, aplicaciones moviles y de escritorio, sistemas de gestión."
    }, {
        titulo: "Desarrollo Videojuegos",
        img: "../../Img/Servicio2.png",
        descripcion: "Videojuegos en 2D Y 3D multi-plataforma, y cualquier género. "
    }, {
        titulo: "Contenido audiovisual",
        img: "../../Img/Servicio2.png",
        descripcion: "Videos, Imagenes, animaciones 2D y 3D, contenido para redes sociales."
    }, {
        titulo: "Marketing digital",
        img: "../../Img/Servicio2.png",
        descripcion: "Posicionamiento de marca, SEO, anuncios, gestión CRM, campañas publicitarias."
    }]

    render() {
        return (
            <div className="caja2" id="servicios">
                <div className="container">
                    <div className="row">
                        <div className="col-12" >
                            <h3 className="text-center titulo2 font-weight-bold" id="servicios">Servicios</h3>
                        </div>
                        <div className="col-12">
                            <h5 className="text-center subtitulo2">Hacemos que todos tus sueños se conviertan en estas realidades</h5>
                        </div>
                        <div className="col-12">
                            <hr className="linea"></hr>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {this.contenidos.map((contenido, key) => {
                            return (
                                <div className=" col-sm-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center" key={key}>
                                    <img src={contenido.img} className="img-fluid img-servicio card-img-top mx-auto rounded d-block" alt="Imagen servicio jamavo"></img>
                                    <h5 className="text-center titulo-encabezado font-weight-bold ">{contenido.titulo}</h5>
                                    <h6 className="text-center texto ">{contenido.descripcion}</h6>
                                    <hr className="linea" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
