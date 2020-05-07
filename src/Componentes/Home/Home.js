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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12 ">
                            <div className="container">
                                <div className="row espaciado"></div>
                                <div className="row espaciado"></div>
                                <div className="row ">
                                    <div className="container">
                                        <div className="row mb-2">
                                            <h1 className="titulo mx-auto">A la medida de su <br /> necesidad y presupuesto.</h1>
                                        </div>
                                        <div className="row mb-2">
                                            <h3 className="h4 subtitulo" style={{ color: "#614D66" }}>Desarrollamos lo imposible</h3>
                                        </div >
                                        <div className="row mt-2 pt-2">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-2 col-md-3 col-lg-1 col-xl-1 espacio-boton-contacto"></div>
                                                    <div className=" col-sm-8 col-md-6 col-lg-8 col-xl-8 container-boton-contacto">
                                                        <button type="button" className="btn btn-block boton-contacto btn-outline-secondary rounded-pill">
                                                            <span className="align-baseline">CONTACTANOS</span>
                                                        </button>
                                                    </div>
                                                    <div className="col-sm-2 col-md-3 col-lg-3 col-xl-3"></div>
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





