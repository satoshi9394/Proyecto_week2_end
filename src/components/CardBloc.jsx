import React from 'react'
import '../style/cardBloc.css';

function CardBloc(props) {
    return(
        <div id={props.bloc}>
            <div class={props.orientacion}>
                <div class="card-image">
                    <img src={props.imgUrl} alt="Imagen de bloc"/>
                </div>
                <div class="card-stacked ">
                    <h5 class="header left-align indigo-text text-darken-4">{props.title}</h5>
                    <div class="card-content">
                        <p>{props.p}</p>
                        <div className='col s12'>
                            <h6 className="right-align grey-text text-lighten-1">Fecha {props.date}</h6>
                        </div>
                        <div className='col s12' id='end'>
                            <h6 className="autor right-align grey-text text-darken-3">
                                Canal: {props.autor}
                            </h6>
                        </div>
                        <div className="col s12" id="eliminar">
                            <h5 className="left-align deep-orange-text text-darken-3" >
                                {props.categoria}
                            </h5>
                        </div>
                    </div>
                    <div class="col s12" id="footer-col">
                        <a href={props.link} target="_blank">
                            <button class="btn waves-effect waves-light" type="submit" name="action">Ver mas
                                <i class="material-icons right">video_library</i>
                            </button>                            
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CardBloc