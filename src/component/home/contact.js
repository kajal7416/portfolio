import React from 'react'
import './assest/contact.css'


export default function Contact() {
  return (
    <div className='contact' id='contact' >
        <div className='contact-page'>
          <h1>Contact Us</h1>
        <div className='container contact-flex' >
        <div className='con' data-aos="flip-left">
          <div className='con-detail'>
            <div className='emailicon'><i class="fa-regular fa-envelope"></i></div>
            <div className='emailid'>
              <h4>Email</h4>
              <p>kajal9054yadav@gmail.com</p>
              </div>
          </div>
          <div className='con-detail'>
          <div className='call'><i class="fa-solid fa-phone-volume"></i></div>
          <div className='number'>
          <h4>Contact No.</h4>
          <p>+91 9054494816</p>
          </div>
          </div>
          <div className='con-detail'>
          <div className='call'><i class="fa-solid fa-location-dot"></i></div>
          <div className='number'>
          <h4>Address</h4>
          <p>Narol, Ahmedabad, 382405</p>
          </div>
          </div>
          </div>
          <div className='letstalk' data-aos="flip-right">
            <h2>Get<br></br><span>in</span></h2>
            <h3>Touch</h3>
          </div>
        </div>
          
      
        </div>
        
    </div>
  )
}
