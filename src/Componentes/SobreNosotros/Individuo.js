import React, { Component } from 'react'

export default class Individuo extends Component {
    render() {
        return (
            <div>
                <img src="../../Img/Usuario.jpg" 
                    className="card-img-top imagenServicio rounded mx-auto d-block" 
                    alt="Imagen equipo" />
                <h1 className="titulo-individuo">Hello, world!</h1>
                <p className="texto-individuo">
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <hr></hr>
            </div>
        )
    }
}
