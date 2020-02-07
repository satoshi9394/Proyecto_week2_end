import React from 'react'

function NavBar(props) {
    return(
        <nav>
            <div class="nav-wrapper light-blue darken-4">
                <a href="#" class="brand-logo right">
                    <img src={props.imgUrl} alt="Logo"/>
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