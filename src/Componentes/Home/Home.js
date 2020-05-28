import React, { Component } from 'react'
import './Home.css';
import HouseFuture from "../../assets/HouseFuture.json";
import Lottie from "react-lottie";

const defaultOptions = {
    loop: true,
    autoplay: true,
    renderSettings: {
    preserveAspectRadio: 'xMidyMid sclie'
    }
};

export default class Home extends Component {

    render() {
        return (
                <div className="container-fluid home" id="Inicio">
                    <div className="row">
                        <div className="col-lg-5 col-12 caja-enunciado d-flex align-items-center">
                            <div className="container ">
                                <div className="row ">
                                    <div className="col-12 ">
                                        <h1 className="titulo font-weight-bold">A la medida de su necesidad y presupuesto</h1>
                                    </div>
                                    <div className="col-12 ">
                                        <h3 className="h4 subtitulo">Desarrollamos lo imposible</h3>
                                    </div >
                                    <div className="col-12 caja-boton">
                                        <a href="#contactanos" className="btn btn-block letra-boton boton-contacto btn-outline-secondary font-weight-bold">
                                            CONTACTANOS
                                    </a>
                                    </div>
                                </div >
                            </div>
                        </div>
                        <div className="d-flex align-items-start col-lg-7 col-12 caja-animacion">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 col-sm-2 col-md-2 col-lg-12 col-xl-12">
                                    </div>
                                    <div className="col-12 col-sm-8 col-md-8 col-lg-12 col-xl-12">
                                        <Lottie options={{ animationData: HouseFuture, ...defaultOptions }} />
                                    </div>
                                    <div className="col-12 col-sm-2 col-md-2 col-lg-12 col-xl-12">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}





