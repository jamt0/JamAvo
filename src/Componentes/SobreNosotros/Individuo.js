import React, { Component } from 'react'

export default class Individuo extends Component {
    render() {
        return (
            <div>
                <img src="../../Img/Usuario.png" 
                    className="card-img-top imagen-individuo rounded mx-auto d-block" 
                    alt="Imagen equipo" />
                <hr className="linea"></hr>
                <h1 className="titulo-encabezado font-weight-bold text-center ">{this.props.nombre}</h1>         
                <p className="texto text-justify">
                    {this.props.descripcion}
                </p>
            </div>
        )
    }
}
