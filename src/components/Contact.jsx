import React, { useState } from 'react'

function Contact() {

  const [data,setData]=useState({
    fullname:"",
    email:"",
    phone:"",
    message:""
  });

  let InputEvent=(e)=>{
    const {name,value}=e.target
    setData((preval)=>{
      return {
        ...preval,
        [name]:value,
      };
    })
  }

  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`Name Is 📛${data.fullname}Email Is 📧${data.email}Phone Is ☎️${data.phone}Message Is 📝${data.message} `)
  }
  return (
    <>
      <section id='Contact'>
        <h1 className='text-center'>Contact Us</h1>
        <div className='container pt-5 py-lg-5 '>
          <div className='row'>
            <div className='col-md-10 mx-auto'>
              <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Name</label>
                  <input type="text" name='fullname' value={data.fullname} onChange={InputEvent} class="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput2" class="form-label">Email</label>
                  <input type="email" name='email' value={data.email} onChange={InputEvent} class="form-control" id="exampleFormControlInput2" placeholder="Enter Email" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput3" class="form-label">Phone</label>
                  <input type="number" name='phone' value={data.phone} onChange={InputEvent} class="form-control" id="exampleFormControlInput3" placeholder="Phone" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea4" class="form-label">Message</label>
                  <textarea class="form-control" name='message' value={data.message } onChange={InputEvent} id="exampleFormControlTextarea4" rows="3"></textarea>
                </div>
                <div className='col-12'>
                  <button type="submit" className='btn btn-primary'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact