import React, { Component } from 'react'

export default class Individuo extends Component {
    render() {
        return (
            <div>
                <img src="../../Img/Usuario.png" 
                    className="card-img-top imagenServicio rounded mx-auto d-block" 
                    alt="Imagen equipo" />
                <h1 className="titulo-individuo">{this.props.nombre}</h1>
                <p className="texto-individuo">
                    {this.props.descripcion}
                </p>
                <hr></hr>
            </div>
        )
    }
}
