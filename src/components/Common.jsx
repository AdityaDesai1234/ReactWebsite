import React from 'react'

function Common(props) {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className='container'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-md-6 py-5 py-lg-5 order-2 order-lg-1 left d-flex justify-content-center flex-column'>
                            
                            <h1>{props.name} <span> {props.spanM} </span></h1>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum modi soluta est at corporis! Voluptates ducimus magni veritatis perferendis cupiditate!</p>
                            <button onClick={props.navigation}>{props.btnName}</button>
                        </div>
                        <div className='col-md-6 pt-5 py-lg-5 order-1 order-lg-2 right'>
                            <img src={props.imgsrc} alt="aditya image" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common