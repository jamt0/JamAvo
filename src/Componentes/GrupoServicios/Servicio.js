import React, { Component } from 'react'
import './Servicios.css';

export default class Servicio extends Component {
    render() {
        return (
            <div>
                <img src="../../Img/ImagenServicio.jpg" className="card-img-top imagenServicio rounded mx-auto d-block" alt="Imagen servicio" />
                <h5 className="card-title text-center titulo-servicio ">Card title</h5>
            </div>
        )
    }
}
