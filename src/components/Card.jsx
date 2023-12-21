import React from 'react'
import web from '../img/undraw_Pilates_ltw9.png'
import { NavLink } from 'react-router-dom'
function Card(props) {
    return (
        <>
            <div className='col-md-4 col-12'>
                <div className="card">
                    <img src={props.imgsrc} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button to="#" className="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card