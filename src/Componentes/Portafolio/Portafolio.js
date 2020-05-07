import React, { Component } from 'react'
import Contenido from './ContenidoPortafolio'
import './Portafolio.css';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default class Portafolio extends Component {
    render() {
        return (
            <div className="fondo-portafolio">
                <div className="container">
                    <div className="row espaciado-portafolio">
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="titulo-portafolio text-center">Portafolio</h3>
                        </div>
                        <div className="col-12">
                            <h5 className="text-center subtitulo-portafolio">Hacemos que todos tus sueños se conviertan en estas realidades</h5>
                        </div>
                        <div className="col-12">
                            <hr style={{ color: "#ffffff" }}></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Tabs defaultActiveKey="1" type="card"className="text-center">
                                <TabPane tab="Todo" key="1">
                                    <Contenido />
                                </TabPane>
                                <TabPane tab="Páginas Web" key="2">
                                    <Contenido />
                                </TabPane>
                                <TabPane tab="Aplicaciones Moviles" key="3">
                                    <Contenido />
                                </TabPane>
                                <TabPane tab="Aplicaciones Escritorio" key="4">
                                    <Contenido />
                                </TabPane>
                                <TabPane tab="Videojuegos" key="5">
                                    <Contenido />
                                </TabPane>
                                <TabPane tab="Animaciones" key="6">
                                    <Contenido />
                                </TabPane>
                                <TabPane tab="Diseños Graficos" key="7">
                                    <Contenido />
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

