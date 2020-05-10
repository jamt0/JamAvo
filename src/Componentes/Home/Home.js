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
            <div className="container-fluid home">
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
                                            <h3 className="h4 subtitulo" style={{ color: "#614D66" }}>Desarrollamos lo imposible</h3>
                                        </div >
                                        <div className="row mt-2 pt-2">
                                            <div className="container">
                                                <div className="row caja-boton">
                                                        <button type="button" className="btn btn-block boton-contacto btn-outline-secondary rounded-pill">
                                                            <span className="align-text-bottom letra-boton font-weight-bold">CONTACTANOS</span>
                                                        </button>
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
                        </div>   
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





