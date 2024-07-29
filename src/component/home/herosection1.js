

import './assest/herosection1.css'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


export default function Herosection1() {
  const [click, setClick] = useState()

  const closeMenu = () => setClick(false)
  
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can set the default animation duration here
    });
  }, []);
  return (
    <div>
      <div className='herosection' id='home'>
        <div className='container content'>
          <div className="intro">
            <h2 className='port' data-aos="fade-right">Hello,<span> I'm</span></h2>
            <h1 className='name flip-up' data-aos="fade-left">Kajal Yadav</h1>
            <h1 class="typing-effect"><span>FRONT END</span> DEVELOPER</h1>
            <p data-aos="fade-up">I'm a front-end developer passionate about creating beautiful and functional websites.</p>
            <div className='button-flex'>
            <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className='workbtn'><button class="custom-btn btn">DOWNLOAD CV</button></Link>
            <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className='workbtn workbtn1'><button class="custom-btn btn1">My Work</button></Link>
            </div>
            <br></br>

          </div>
          
        </div>
        
      </div>
    </div>
  )
}

