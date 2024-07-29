import React from 'react'
import './assest/footer.css'

export default function Footer() {
  return (
    <footer>
      {/* <div className='logo-footer'><img src='favicon.png'></img></div> */}
        <ul class="icons">
            <li data-aos="zoom-in"><a href="https://wa.me/message/RKCBUPAIK4OBO1" target='_blank'><i class="fa-brands fa-whatsapp"></i></a></li>
            <li data-aos="zoom-in"><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li data-aos="zoom-in"><a href="https://www.instagram.com/kajal_yadav_7416?igsh=MXJ0M3JoNGZva3VuNQ==" target='_blank'><i class="fa-brands fa-instagram"></i></a></li>
            <li data-aos="zoom-in"><a href="#"><i class="fa-brands fa-github"></i></a></li>
        </ul>
        <ul class="menu1" >
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#eduaction">Education</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <a href="#contact"> <button className='resume'>Resume</button></a>
        </ul>
            <div class="footer-copyright">
                <p>Copyright @ 2024 All Rights Reserved.</p>
            </div>
    </footer>
  )
}