import React from 'react'


import '../style/footer.css';



const FooterBar = () => {
    return(
        <footer className="page-footer indigo darken-3">
            <div className="row left-align">
                <div className="col s12">
                    <button className="btn waves-effect waves-light">
                        Contacto
                        <i className="material-icons right">send</i>
                    </button>
                </div>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6 m6 l6 xl6" >
                            <i className="material-icons prefix" >account_circle</i>
                            <input type="text" id="first-name" className="validate" required></input>
                            <label htmlFor="first-name">Nombre:</label>
                        </div>
                        <div className="input-field col s6 m6 l6 xl6">
                        <i className="material-icons prefix" >account_circle</i>
                        <input type="text" id="last-name" className="validate" required></input>
                        <label htmlFor="last-name">Apellido:</label>
                    </div>
                    <div className="input-field col s6 m6 l6 xl6">
                        <i className="material-icons prefix" >contact_mail</i>
                        <input type="email" id="email" className="validate" required></input>
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className="input-field col s6 m6 l6 xl6">
                        <i className="material-icons prefix" >contact_phone</i>
                        <input type="text" id="telefono" className="validate" required></input>
                        <label htmlFor="telefono">Telefono:</label>
                    </div>
                    </div>
                </form>
            </div>
          <div className="footer-copyright">
            <span>
                © 2014 Copyright Text
            </span>
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </footer>
    )
}
    




export default FooterBar