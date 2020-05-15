import React, { Component } from 'react'

export default class Metodo extends Component {
    render() {
        return (
            <div className="card card-metodo">
                <div className="card-body">
                    <div className="">{this.props.icono}</div>
                    <h5 className="card-title titulo-metodo text-center text-md-left font-weight-bold">{this.props.titulo}</h5>
                    <p className="card-text texto-metodo text-center text-md-left">{this.props.descripcion}</p>
                </div>
            </div>
        )
    }
}
