import React, { Component } from 'react'
import './Formulario.css';
import axios from 'axios'
import * as yup from 'yup';

const isValid = "form-control form-control-lg is-valid";
const isInvalid = "form-control form-control-lg is-invalid";
const NoValid = "form-control form-control-lg";

export default class Formulario extends Component {

    state = {
        name: '',
        mail: '',
        number: '',
        typeProject: '',
        descripcion: '',
    }

    schema = yup.object().shape({
        name: yup.string()
            .required()
            .min(4),
        mail: yup.string()
            .required()
            .email(),
        number: yup.number()
            .required()
            .min(8)
            .integer()
            .positive(),
        descripcion: yup.string()
            .required()
    });

    onSubmit = async (e) => {
        e.preventDefault();
        const newCorreo = {
            name: this.state.name,
            mail: this.state.mail,
            number: this.state.number,
            typeProject: this.state.typeProject,
            descripcion: this.state.descripcion,
            date: new Date()
        };
        console.log(yup.reach(this.schema, 'name')) 
        this.schema.isValid(newCorreo).then(function (valid) {
            console.log(valid)
            //valid - true or false
        });
        console.log(newCorreo)
        //axios.post('http://localhost:5000/api/correos', newCorreo);
        console.log("correo enviado")
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onInputBlur = (e) => {
        console.log({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        //const res = await axios.get('http://localhost:5000/api/correos');
        //console.log(res)
    }

    render() {
        return (
            <div className="container-fluid caja1" id="contactanos">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="titulo1 text-center font-weight-bold">Contactanos</h3>
                        </div>
                        <div className="col-12">
                            <h5 className="text-center subtitulo1">Escribenos tus requerimientos, te enviaremos el mejor presupuesto</h5>
                        </div>
                        <div className="col-12">
                            <hr className="linea2"></hr>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center" style={{ paddingTop: 20 }}>
                    <div className="col-12 col-sm-1 col-md-2 col-xl-3">
                    </div>
                    <div className="col-12 col-sm-10 col-md-8 col-xl-6">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className={isValid} name="name"
                                    id="text" placeholder="Nombre completo *" value={this.state.name}
                                    onChange={this.onInputChange} onBlur={this.onInputBlur} required />
                                <div className="valid-feedback ml-2">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback ml-2">
                                    Please choose a username.
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" className={isInvalid} name="mail"
                                    id="email" placeholder="Correo electrónico *" value={this.state.mail}
                                    onChange={this.onInputChange} onBlur={this.onInputBlur} required />
                                <div className="valid-feedback ml-2">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback ml-2">
                                    Please choose a username.
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="tel" className={isValid} name="number"
                                    id="tel" placeholder="Número telefónico *" value={this.state.number}
                                    onChange={this.onInputChange} onBlur={this.onInputBlur} required />
                                <div className="valid-feedback ml-2">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback ml-2">
                                    Please choose a username.
                                </div>
                            </div>
                            <div className="form-group">
                                <select className={NoValid} id="tipo-solucion" name="typeProject"
                                    value={this.state.typeProject} onChange={this.onInputChange}
                                    onBlur={this.onInputBlur} required>
                                    <option>¿Qué tipo de solución buscas?</option>
                                    <option>Página Web</option>
                                    <option>App Mobile</option>
                                    <option>Sistema de Gestión</option>
                                    <option>Marketing Digital</option>
                                    <option>Organizamos tu idea</option>
                                </select>
                                <div className="valid-feedback ml-2">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback ml-2">
                                    Please choose a username.
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea className={isValid}
                                    id="descripcion" rows="4"
                                    placeholder="Cuentanos más de tu idea..."
                                    value={this.state.descripcion} onChange={this.onInputChange}
                                    name="descripcion" onBlur={this.onInputBlur} required>
                                </textarea>
                                <div className="valid-feedback ml-2">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback ml-2">
                                    Please choose a username.
                                </div>
                            </div>
                            <button type="submit" className="btn btn-secondary btn-lg btn-block">Consultar</button>
                        </form>
                    </div>
                    <div className="col-12 col-sm-1 col-md-2 col-xl-3">
                    </div>
                </div>
            </div>
        )
    }
}

