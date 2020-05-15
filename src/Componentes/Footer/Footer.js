import React, { Component } from 'react'
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

export default class Footer extends Component {

    tags = ["Diseño web", "UI", "Java", "Desarrollo Mobile", "RV", "Aplicaciones web", "Página web",
        "UX", "IA", "Aplicación mobile", "VideoJuegos", "Landing page", "2D", "Aplicación movil",
        "Animaciones", "Marketing", "3D", "HTML", "React", "Flutter", "JavaScript", "Node.js", "Nativo"];

    render() {
        return (
            <div className="footer">
                <footer className="fondo-footer font-small pt-4">
                    <div className="container text-center text-md-left">
                        <div className="row">
                            <div className="col-md-3 mx-auto">
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Jam avo</h5>
                                <hr className="linea3"></hr>
                                <p>Una organización dedicada a la inovación, convirtiendo lo imposible en
                                una realidad, evolucionando por medio de la tecnología.
                                </p>
                            </div>
                            <hr className="clearfix w-100 d-md-none" />
                            <div className="col-md-6 mx-auto">
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">tags</h5>
                                <hr className="linea3"></hr>
                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    {this.tags.map((value, index) => {
                                        return (
                                            <div className="btn-group mr-2 mb-2" role="group" key={index}>
                                                <button type="button" className="btn btn-outline-light boton-tag" key={index}>{value}
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <hr className="clearfix w-100 d-md-none" />
                            <div className="col-md-3 mx-auto">
                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Contacto</h5>
                                <hr className="linea3"></hr>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <p><RoomIcon />Buenos Aires - Argentina</p>
                                    </li>
                                    <li className="mb-2">
                                        <p><RoomIcon />Bogotá - Colombia</p>
                                    </li>
                                    <li className="mb-2">
                                        <p><MailIcon /> jamavocorp@gmail.com</p>
                                    </li>
                                    <li className="mb-2">
                                        <p><PhoneIcon />+54 11 3957 8559</p>
                                    </li>
                                    <li className="mb-2">
                                        <p><PhoneIcon />+57 310 805 9857</p>
                                    </li>
                                </ul>
                            </div>
                            <hr className=" linea3 w-100" />
                        </div>
                    </div>
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="a-footer" href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"><FacebookIcon /></a>
                        </li>
                        <li className="list-inline-item">
                            <a className="a-footer" href="https://www.whatsapp.com" rel="noopener noreferrer" target="_blank"><WhatsAppIcon /></a>
                        </li>
                        <li className="list-inline-item">
                            <a className="a-footer" href="https://www.instagram.com" rel="noopener noreferrer" target="_blank"><InstagramIcon /></a>
                        </li>
                        <li className="list-inline-item">
                            <a className="a-footer" href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank"><LinkedInIcon /></a>
                        </li>
                    </ul>
                    <div className="fondo-footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="#home"> JamAvo Corporation</a>
                    </div>
                </footer>
            </div>
        )
    }
}
