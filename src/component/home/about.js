import React from 'react'
import './assest/about.css'
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function About() {
  return (
    
      <section id="about">
        
        <div className='container aboutme'>
          <div className='about-img'>
            <div className='kajalimg'>
              <img src='./image/1.png' data-aos="zoom-in"></img>
            </div>
          </div>
        <div className="detail">
          <h1>ABOUT <span style={{color: '#ff3f81'}}>ME</span></h1>
        {/* <h2>PERSONAL INFOS</h2> */}
        <p data-aos="fade-up">Hello! I'm a Fresher Web Developer with a passion for creating stunning websites. I have experience with HTML, CSS, Javascript, Bootstrap and React.</p>
        <p data-aos="fade-up">A Fresher Front End Developer's resume should emphasize their ability to create responsive designs, collaborate with back-end developers, and utilize version control systems to improve website performance and user experience.</p>
        <div className='div' data-aos="fade-up">
           <div className='personal-detail' >
            <div className='detail1'><div className='info-left'>Name:</div><div className='info-right'>Kajal Yadav</div></div>
            <div className='detail1'><div className='info-left'>DOB:</div><div className='info-right'>12 May 2000</div></div>
            <div className='detail1'><div className='info-left'>Phone:</div><div className='info-right'>+91 9054494816</div></div>
            
        </div>
        <div className='personal-detail'>
            <div className='detail1'><div className='info-left'>Email:</div><div className='info-right'>kajal9054yadav@gmail.com</div></div>
            <div className='detail1'><div className='info-left'>Address:</div><div className='info-right'>Narol, Ahmedabad, 382405</div></div>
        </div>
        </div>
        {/* <Link to="/component/about/learnmore"> <button class="custom-btn btn-15">Read More <i class="fa-solid fa-arrow-right"></i></button>  </Link> */}
        </div>
        </div>

    </section>
  )
}
