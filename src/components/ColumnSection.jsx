import React from 'react'

import '../style/columnSection.css';

import CardBloc from './CardBloc'

function ColumnSetion(props) {
    return(
        <div className='container'>
            <div className="row">
                <div className="col s12" id='titulo-col'>
                    <h4 className="center-align indigo-text text-darken-4">
                    {props.categoria}
                    </h4>
                </div>
                <div className="columnas col s4" >
                    <CardBloc
                    eliminar='eliminar'
                    orientacion="card  teal lighten-1"
                    orientacion2="card teal lighten-1"
                    imgUrl={props.img1}
                    title={props.title1}
                    p={props.p1}
                    date={props.date1}
                    autor={props.autor1}
                    link={props.link1}
                    style="none"
                    />
                </div>
                <div className="col s4 columnas">
                    <CardBloc
                    orientacion="card teal lighten-1"
                    orientacion2="card teal lighten-1"
                    imgUrl={props.img2}
                    title={props.title2}
                    p={props.p2}
                    date={props.date2}
                    autor={props.autor2}
                    link={props.link2}
                    style="none"        
                    />
                </div>
                <div className="col s4 columnas">
                    <CardBloc
                    orientacion="card teal lighten-1"
                    orientacion2="card teal lighten-1"
                    imgUrl={props.img3}
                    title={props.title3}
                    p={props.p3}
                    date={props.date3}
                    autor={props.autor3}
                    link={props.link3}      
                    />
                </div>

            </div>
        </div>
    );
}

export default ColumnSetion;