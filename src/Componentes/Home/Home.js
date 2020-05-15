import React, { Component } from 'react'
import './Home.css';
import HouseFuture from "../../assets/HouseFuture.json";
import Lottie from "react-lottie";

const defaultOptions = {
    loop:true,
    autoplay: true,
    renderSettings:{
        preserveAspectRadio: 'xMidyMid sclie'
    }
};  

export default class Home extends Component {

    render() {
        return (
            <div className="container-fluid home" id="Inicio"> 
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-12 ">
                            <div className="container">
                                <div className="row espaciado"></div>
                                <div className="row espaciado"></div>
                                <div className="row ">
                                    <div className="container">
                                        <div className="row mb-2">
                                            <h1 className="titulo font-weight-bold">A la medida de su necesidad y presupuesto.</h1>
                                        </div>
                                        <div className="row mb-2 caja-boton">
                                            <h3 className="h4 subtitulo">Desarrollamos lo imposible</h3>
                                        </div >
                                        <div className="row mt-2 pt-2">
                                            <div className="container">
                                                <div className="row caja-boton">
                                                        <a type="button" href="#contactanos" className="btn btn-block letra-boton boton-contacto btn-outline-secondary rounded-pill font-weight-bold">
                                                            CONTACTANOS
                                                        </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>
                        <div className="col-lg-7 col-12">
                        <div className="container">
                                <div className="row espaciado-animacion"></div>
                                <div className="row espaciado-animacion"></div>
                                <div className="row ">
                                <Lottie options={{animationData: HouseFuture, ...defaultOptions}}/>
                                </div>
                                <div className="row espaciado-animacion"></div>
                        </div>   
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





