import React, { Component } from 'react'
import Metodo from './Metodo';

export default class Metodos extends Component {
    render() {
        return (
            <div className="card-deck">
                <div className="container"></div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <Metodo/>   
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Metodo/>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Metodo/>   
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Metodo/>   
                    </div>
                </div>
            </div>
        )
    }
}
