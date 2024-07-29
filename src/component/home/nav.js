import React, { useState, useEffect } from 'react';
// import './nav.css';
import '../home/assest/nav.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';
// import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false)
  const [click, setClick] = useState()

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  useEffect(() => {
    AOS.init({
      duration: 1200, // You can set the default animation duration here
    });
  }, []);

  const closeMenu = () => setClick(false)
  return (
    <>

      <div className='navigation'>
        <nav className={navbarClasses.join(' ')}>
          <div class="container red topBotomBordersOut">
            {/* logo */}
            {/* <Link to="home"><div className='logo' data-aos="flip-left"><h4><span>K</span>AJAL</h4></div></Link> */}
            <div className='logo'><img src='logo1.png' style={{height: '30px' , width: '100px'}}></img></div>
            {/* menu */}
            <div className='menu' data-aos="flip-left">
              <Link to="home" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className='home' >HOME</Link>
              <Link to="about" spy={true} smooth={true} offset={50} duration={300} onClick={closeMenu} className='home'>ABOUT</Link>
              <Link to="eduaction" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className='home'>EDUCATION</Link>
              <Link to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className='home'>SKILLS</Link>
              <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className='home'>PORTFOLIO</Link>
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu} className='home'>CONTACT</Link>

            </div>
            {/* toggle */}
            <div className='bar' onClick={() => setToggle(!toggle)}><i class="fa-solid fa-bars"></i></div>
            <div className='toggle' >
              {toggle && (
                <div className='menu' data-aos="fade-left">
                  <div className='logo-toggle' >
                    <img src='1.png'></img>
                  </div>
                  <li><a href='#home' className='toggl1'>HOME</a></li>
                  <li><a href='#about' className='toggl1'>ABOUT</a></li>
                  <li><a href='#eduaction' className='toggl1'>EDUCATION</a></li>
                  <li><a href='#skills' className='toggl1'>SKILLS</a></li>
                  <li><a href='#portfolio' className='toggl1'>PORTFOLIO</a></li>
                  <li><a href='#contact' className='toggl1'>CONTACT</a></li>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
