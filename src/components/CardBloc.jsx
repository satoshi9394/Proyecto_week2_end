import React from 'react'

function CardBloc(props) {
    return(
        <div id={props.bloc}>
            <div class={props.orientacion}>
                <div class="card-image">
                    <img src={props.imgUrl} alt="Imagen de bloc"/>
                </div>
                <div class="card-stacked ">
                    <h5 class="header left-align">{props.title}</h5>
                    <div class="card-content">
                        <p>{props.p}</p>
                        <div className='col s12'>
                            <span>{props.date}</span>
                        </div>
                        <div className='col s12'>
                            <h6 className="autor">
                                {props.autor}
                            </h6>
                        </div>
                        <div className="col s12">
                            <h5>
                                {props.categoria}
                            </h5>
                        </div>
                    </div>
                    <div class="card-action">
                        <a href={props.link} target="_blank">Quieres saber mas</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CardBloc