import React from 'react'
import '../style/cardBloc.css';

const Card = (props) =>{
    return (
        <div>
        <div className={props.info.dimension}>
            <div class={props.info.orientacion}>
                <div class="card-image">
                    <img src={props.info.imgUrl}></img>
                </div>
                <div class="card-content">
                    <h5>{props.info.title}</h5>
                    <p>{props.info.p}</p>
                    <p>{props.info.autor}</p>
                    <p>{props.info.date}</p>
                    <p>{props.info.categoria}</p>
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

export default Card;