import React from 'react'

import CardBloc from './CardBloc'

function ColumnSetion(props) {
    return(
        <div className='container'>
            <div className="row">
            <h4 className="left-align">{props.categoria}</h4>
                <div className="col s4">
                    <CardBloc
                    orientacion="card teal lighten-1"
                    imgUrl={props.img1}
                    title={props.title1}
                    p={props.p1}
                    date={props.date1}
                    autor={props.autor1}
                    link={props.link1}
                    />
                </div>
                <div className="col s4">
                    <CardBloc
                    orientacion="card teal lighten-1"
                    imgUrl={props.img2}
                    title={props.title2}
                    p={props.p2}
                    date={props.date2}
                    autor={props.autor2}
                    link={props.link2}        
                    />
                </div>
                <div className="col s4">
                    <CardBloc
                    orientacion="card teal lighten-1"
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