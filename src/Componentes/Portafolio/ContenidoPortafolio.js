import React, { Component } from 'react'

export default class ContenidoPortafolio extends Component {

    contenidos=[
        {titulo: "pagina web 1", descripcion:"descripcion", tipo:"web", img:"../../Img/Servicio3.png"},
        {titulo: "pagina web 2", descripcion:"descripcion", tipo:"web", img:"../../Img/Servicio3.png"},
        {titulo: "pagina web 3", descripcion:"descripcion", tipo:"web", img:"../../Img/Servicio3.png"},
        {titulo: "aplicación movil 1", descripcion:"descripcion", tipo:"movile", img:"../../Img/Servicio3.png"},
        {titulo: "aplicación movil 2", descripcion:"descripcion", tipo:"movile", img:"../../Img/Servicio3.png"},
        {titulo: "aplicación movil 3", descripcion:"descripcion", tipo:"movile", img:"../../Img/Servicio3.png"},
        {titulo: "aplicación escritorio 1", descripcion:"descripcion", tipo:"escritorio", img:"../../Img/Servicio3.png"},
        {titulo: "aplicación escritorio 2", descripcion:"descripcion", tipo:"escritorio", img:"../../Img/Servicio3.png"},
        {titulo: "aplicación escritorio 3", descripcion:"descripcion", tipo:"escritorio", img:"../../Img/Servicio3.png"},
        {titulo: "contenido digital 1", descripcion:"descripcion", tipo:"digital", img:"../../Img/Servicio3.png"},
        {titulo: "contenido digital 2", descripcion:"descripcion", tipo:"digital", img:"../../Img/Servicio3.png"},
        {titulo: "contenido digital 3", descripcion:"descripcion", tipo:"digital", img:"../../Img/Servicio3.png"},
        {titulo: "marketing 1", descripcion:"descripcion", tipo:"marketing", img:"../../Img/Servicio3.png"},
        {titulo: "marketing 2", descripcion:"descripcion", tipo:"marketing", img:"../../Img/Servicio3.png"},
        {titulo: "marketing 3", descripcion:"descripcion", tipo:"marketing", img:"../../Img/Servicio3.png"},
        {titulo: "videojuego 1", descripcion:"descripcion", tipo:"juego", img:"../../Img/Servicio3.png"},
        {titulo: "videojuego 2", descripcion:"descripcion", tipo:"juego", img:"../../Img/Servicio3.png"},
        {titulo: "videojuego 3", descripcion:"descripcion", tipo:"juego", img:"../../Img/Servicio3.png"},
    ]

    contador2="";
    contador=0;
    contador3=100;
    contador4=1000;

    render() {
        return (
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                {this.contenidos.map((contenido) => {
                    if(this.props.tipo===contenido.tipo){
                        this.contador++;
                        this.contador2=contenido.tipo + this.contador;
                        return (
                            <div className="col-12 col-md-6 col-lg-4" key={this.contador2}>
                            <div className="card bg-primary text-center mb-4 p-1" >
                                <blockquote className="blockquote">
                                    <img src={contenido.img} className="card-img-top img-portafolio" alt="..." />
                                        <h5 className="titulo-encabezado">{contenido.titulo}</h5>
                                    <footer className="footer texto">
                                        <small>
                                            {contenido.descripcion}
                                        </small>
                                    </footer>
                                </blockquote>
                            </div>
                            </div>
                            )
                            }
                    if(this.props.tipo==="todo"){
                        this.contador3++;
                        this.contador2=contenido.tipo + this.contador3;
                        return (
                            <div className="col-12 col-md-6 col-lg-4" key={this.contador2}>
                            <div className="card bg-primary text-center mb-4 p-1">
                                <blockquote className="blockquote">
                                    <img src={contenido.img} className="card-img-top" alt="..." />
                                        <h5 className="titulo-encabezado">{contenido.titulo}</h5>
                                    <footer className="footer texto">
                                        <small>
                                            {contenido.descripcion}
                                        </small>
                                    </footer>
                                </blockquote>
                            </div>
                            </div>
                            )
                    }else{
                        this.contador4++;
                        return(
                            <div key={this.contador4}></div>
                        )
                    }}
                    )
                    }
                
                </div>
                </div>
        )
    }
}

