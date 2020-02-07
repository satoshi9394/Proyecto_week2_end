import React from 'react'
import Logo from '../assents/logo.png'
import '../style/navBar.css';

function NavBar(props) {
    return(
        <nav>
            <div class="nav-wrapper light-blue darken-4">
                <a href="#" class="brand-logo right">
                    <img src={Logo} alt="Logo" id="logo"/>
                </a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Acerca de Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}


export default NavBar