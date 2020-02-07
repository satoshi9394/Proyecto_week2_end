import React from 'react'

function CardBlocH(props) {
    return(
        <div class="col s12 m7">
            <div class="card horizontal">
                <div class="card-image">
                    <img src={props.imgUrl} alt=""/>
                </div>
                <div class="card-stacked">
                    <h5 class="header">{props.title}</h5>
                    <div class="card-content">
                        <p>{props.p}</p>
                        <div className='col s12'>
                            <span>{props.date}</span>
                        </div>
                        <div className='col s12'>
                            <span className="autor">
                                {props.autor}
                            </span>
                        </div>

                    </div>
                    <div class="card-action">
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CardBlocH