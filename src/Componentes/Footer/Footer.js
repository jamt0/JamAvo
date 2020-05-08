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
                <footer class="fondo-footer font-small pt-4">
                    <div class="container text-center text-md-left">
                        <div class="row">
                            <div class="col-md-3 mx-auto">
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Jam avo</h5>
                                <p>Una organización dedicada a la inovación, convirtiendo lo imposible en
                                una realidad, evolucionando por medio de la tecnología.
                                </p>
                            </div>
                            <hr class="clearfix w-100 d-md-none" />
                            <div class="col-md-6 mx-auto">
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">tags</h5>
                                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    {this.tags.map((value, index) => {
                                        return (
                                            <div class="btn-group mr-2 mb-2" role="group" key={index}>
                                                <button type="button" class="btn btn-outline-light" key={index}>{value}
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <hr class="clearfix w-100 d-md-none" />
                            <div class="col-md-3 mx-auto">
                                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Contacto</h5>
                                <ul class="list-unstyled">
                                    <li class="mb-2">
                                        <p><RoomIcon/>Buenos Aires - Argentina</p>
                                    </li>
                                    <li class="mb-2">
                                        <p><RoomIcon/>Bogotá - Colombia</p>
                                    </li>
                                    <li class="mb-2">
                                        <p><MailIcon/> jamavocorp@gmail.com</p>
                                    </li>
                                    <li class="mb-2">
                                        <p><PhoneIcon/>+54 11 3957 8559</p>
                                    </li>
                                    <li class="mb-2">
                                        <p><PhoneIcon/>+54 310 805 9857</p>
                                    </li>
                                </ul>
                            </div>
                            <hr class="clearfix w-100" />
                        </div>
                    </div>
                    <ul class="list-unstyled list-inline text-center">
                        <li class="list-inline-item">
                            <FacebookIcon />
                        </li>
                        <li class="list-inline-item">
                            <WhatsAppIcon />
                        </li>
                        <li class="list-inline-item">
                            <InstagramIcon />
                        </li>
                        <li class="list-inline-item">
                            <LinkedInIcon />
                        </li>
                    </ul>
                    <div class="fondo-footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="#home"> JamAvo Corporation</a>

                    </div>
                </footer>
            </div>
        )
    }
}
