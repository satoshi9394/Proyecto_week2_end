import React from 'react'
import '../style/card.css';

const Card = (props) =>{
    return (
        <div>
        <div className={props.info.dimension}>
            <div className={props.info.orientacion}>
                <div className="card-image" >
                    <img src={props.info.imgUrl} id={props.info.id}></img>
                </div>
                <div className="card-content">
                    <h5 className='white-text'>{props.info.title}</h5>
                    <p>{props.info.p}</p>
                    <p className='right-align grey-text text-darken-2'><b>{props.info.autor}</b></p>
                    <p className='right-align grey-text text-darken-2'><b>{props.info.date}</b></p>
                    <h6 className='right-align blue-text text-darken-4'><b>{props.info.categoria}</b></h6>
                    <a href={props.info.link} target="_blank">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Ver mas
                            <i className="material-icons right">video_library</i>
                        </button>                            
                    </a>
                </div>
            </div>           
        </div>
        </div>
    );
}

export default Card;