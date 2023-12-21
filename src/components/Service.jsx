import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

function Service() {
  return (
    <>
      <section id='services'>
        <h1 className='text-center'>Our Services</h1>
        <div className='container py-5 py-lg-5'>
          <div className='row g-3'>
            {
              Sdata.map((val,ind)=>{
                  return <Card key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                  />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Service