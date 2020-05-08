import React, { Component } from 'react'
import './Formulario.css';

export default class Formulario extends Component {
    render() {
        return (
            <div className="container-fluid " style={{ marginTop: 20, marginBottom: 20 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="titulo-contactanos text-center">Contactanos</h3>
                        </div>
                        <div className="col-12">
                            <h5 className="text-center subtitulo-contactanos">Escribemos tus requerimientos, te enviaremos el mejor presupuesto</h5>
                        </div>
                        <div className="col-12">
                            <hr style={{ color: "#ffffff" }}></hr>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-12 col-sm-1 col-md-2 col-xl-3">
                    </div>
                    <div class="col-12 col-sm-10 col-md-8 col-xl-6">
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control form-control-lg"
                                    id="email" placeholder="Nombre completo *" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control form-control-lg"
                                    id="email" placeholder="Correo electrónico *" />
                            </div>
                            <div class="form-group">
                                <input type="tel" class="form-control form-control-lg"
                                    id="tel" placeholder="Número telefónico *" />
                            </div>
                            <div class="form-group">
                                <select class="form-control form-control-lg" id="tipo-solucion">
                                    <option>¿Qué tipo de solución buscas?</option>
                                    <option>Página Web</option>
                                    <option>App Mobile</option>
                                    <option>Sistema de Gestión</option>
                                    <option>Marketing Digital</option>
                                    <option>Organizamos tu idea</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control form-control-lg"
                                    id="descripcion" rows="4"
                                    placeholder="Cuentanos mas de tu idea ">
                                </textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg btn-block">Consultar</button>
                        </form>
                    </div>
                    <div class="col-12 col-sm-1 col-md-2 col-xl-3">
                    </div>
                </div>
            </div>
        )
    }
}

