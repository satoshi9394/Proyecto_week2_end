import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import '../style/footer.css';

class Modal extends Component{
    render() {
        return ReactDOM.createPortal(
            <div className='modal' id="mimodal">
                <section className='modal-content'>
                    <h1>
                        Esto es un modal
                    </h1>
                    <p>
                        Y muestra mas informacion al usuario
                    </p>
                    <button onClick={this.props.onClose} >
                        Cerrar modal
                    </button>
                </section>
            </div>,
            document.getElementById('modal')
        )
    }
}


class Footer extends Component{
    state= { isModalOpen: false }

    _openModal = () => this.setState({ isModalOpen: true })

    _closeModal = () => this.setState({ isModalOpen: false })

 render() {
    return(
        <footer class="page-footer indigo darken-3">
            <div class="row left-align">
                <div class="col s12">
                    <button class="btn waves-effect waves-light"
                    onClick={this._openModal}>
                        Contacto
                        <i class="material-icons right">send</i>
                    </button>
                    {this.state.isModalOpen &&
                        <Modal onClose={this._closeModal} />
                    }
                </div>
                <form className="col s12">
                    <div className="row">
                        <div class="input-field col s6 m6 l6 xl6" >
                            <i class="material-icons prefix" >account_circle</i>
                            <input type="text" id="first-name" class="validate" required></input>
                            <label for="first-name">Nombre:</label>
                        </div>
                        <div class="input-field col s6 m6 l6 xl6">
                        <i class="material-icons prefix" >account_circle</i>
                        <input type="text" id="last-name" class="validate" required></input>
                        <label for="last-name">Apellido:</label>
                    </div>
                    <div class="input-field col s6 m6 l6 xl6">
                        <i class="material-icons prefix" >contact_mail</i>
                        <input type="email" id="email" class="validate" required></input>
                        <label for="email">Email:</label>
                    </div>
                    <div class="input-field col s6 m6 l6 xl6">
                        <i class="material-icons prefix" >contact_phone</i>
                        <input type="text" id="telefono" class="validate" required></input>
                        <label for="telefono">Telefono:</label>
                    </div>
                    </div>
                </form>
            </div>
          <div class="footer-copyright">
            <span>
                © 2014 Copyright Text
            </span>
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </footer>
    )
    }
}


export default Footer